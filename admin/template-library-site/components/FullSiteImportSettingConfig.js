import { __ } from "@wordpress/i18n";
import FsiGbTypography from "../global-settings/global-settings";
import { useCallback, useEffect, useState } from "@wordpress/element";
import { useDeviceType } from "@Config/displayType";
import generateCSSVariables from "../global-settings/components/GenerateRootCss";
import { updateGlobalStyle } from "../global-settings/fetch";
import { loadGoogleFont } from "../global-settings/helper";
import generateColorsVariables from "../global-settings/components/GenerateColorRoot";
import { usePostDataMutation } from "../services/laravelapi";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { setAttribute } from "../store/attributesSlice";
import templatesData from "../data/templates.json";
import templatePartsData from "../data/template-parts.json";
import FullSiteImportModal from "./fullSiteImportModal";

const FullSiteImportSettingConfig = ({
    template, 
    onBack, 
    isSidebarCollapsed, 
    formData,
    onClose
}) => {

  const { 
    showFullSiteImportModal,
    pageTemplates,
    pageTemplatesLoading,
    pageTemplatesError,
    templateParts,
    templatePartsLoading,
    templatePartsError,
  } = useSelector((state) => state.attributes);
  const dispatch = useDispatch();

  console.log(templatesData);
  console.log(templatePartsData);


  const [isImporting, setIsImporting] = useState(false);
  const [importProgress, setImportProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState("");
  const [stepsOptions, setStepOptions] = useState([]);
  const [uploadsUpdated, setUploadsUpdated] = useState(false);

  const updateStepStatus = (key, status) => {
    setStepOptions(prev =>
      prev.map(step =>
        step.key === key ? { ...step, status } : step
      )
    );
  };

  const [globalColors, setGlobalColors] = useState(template.colors);
	const [customColors, setCustomColors] = useState(template.colors);
	const [gradientColors, setGradientColors] = useState(template.gradientColors);
	const [customGradientColors, setCustomGradientColors] = useState(template.gradientColors);
	const [typography, setTypography] = useState(template.typographies);
	const [customTypography, setCustomTypography] = useState(template.customTypographies);
	const [fontFamilies, setFontFamilies] = useState([]);
	const [globalTypography, setGlobalTypography] = useState({});

  const { nonce, ajaxUrl } = window.frontisBlocksAdmin;
  const deviceType = useDeviceType();

  // Set global typography

  const handleSetGlobalTypography = () => {
    const updatedGlobalTypography = {};
    
      const processTypographies = (source, target) => {
        Object.keys(source).forEach((item) => {
          const typo = source[item];
          if (!typo) return;
    
          if (item === "heading") {
            Object.keys(typo).forEach((headingKey) => {
              const headingTypo = typo[headingKey];
              if (!headingTypo) return;
    
              const keyName = headingKey === "all" ? "headingAll" : headingKey;
    
              target[keyName] = {
                ...(globalTypography[keyName] || {})
              };
    
              if (headingTypo.fontSize) {
                target[keyName].fontSize = {
                  variable: `--fb-global-${keyName}--font-size`,
                  value: headingTypo.fontSize,
                  unit: headingTypo.fontSizeUnit || {
                    Desktop: "px",
                    Tablet: "px",
                    Mobile: "px"
                  }
                };
              }
    
              if (headingTypo.fontWeight) {
                target[keyName].fontWeight = {
                  variable: `--fb-global-${keyName}--font-weight`,
                  value: headingTypo.fontWeight
                };
              }
    
              if (headingTypo.lineHeight) {
                target[keyName].lineHeight = {
                  variable: `--fb-global-${keyName}--line-height`,
                  value: headingTypo.lineHeight,
                  unit: headingTypo.lineHeightUnits || {
                    Desktop: "px",
                    Tablet: "px",
                    Mobile: "px"
                  }
                };
              }
    
              if (headingTypo.letterSpacing) {
                target[keyName].letterSpacing = {
                  variable: `--fb-global-${keyName}--letter-spacing`,
                  value: headingTypo.letterSpacing,
                  unit: headingTypo.letterSpacingUnit || {
                    Desktop: "px",
                    Tablet: "px",
                    Mobile: "px"
                  }
                };
              }
    
              if (headingTypo.fontStyle) {
                target[keyName].fontStyle = {
                  variable: `--fb-global-${keyName}--font-style`,
                  value: headingTypo.fontStyle
                };
              }
    
              if (headingTypo.textTransform) {
                target[keyName].textTransform = {
                  variable: `--fb-global-${keyName}--text-transform`,
                  value: headingTypo.textTransform
                };
              }
    
              if (headingTypo.textDecoration) {
                target[keyName].textDecoration = {
                  variable: `--fb-global-${keyName}--text-decoration`,
                  value: headingTypo.textDecoration
                };
              }
    
              if (headingTypo.fontFamily) {
                target[keyName].fontFamily = {
                  variable: `--fb-global-${keyName}--font-family`,
                  value: headingTypo.fontFamily
                };
              }
            });
          } else {
            target[item] = {
              ...(globalTypography[item] || {})
            };
    
            if (typo.fontSize) {
              target[item].fontSize = {
                variable: `--fb-global-${item}--font-size`,
                value: typo.fontSize,
                unit: typo.fontSizeUnit || {
                  Desktop: "px",
                  Tablet: "px",
                  Mobile: "px"
                }
              };
            }
    
            if (typo.fontWeight) {
              target[item].fontWeight = {
                variable: `--fb-global-${item}--font-weight`,
                value: typo.fontWeight
              };
            }
    
            if (typo.lineHeight) {
              target[item].lineHeight = {
                variable: `--fb-global-${item}--line-height`,
                value: typo.lineHeight,
                unit: typo.lineHeightUnits || {
                  Desktop: "px",
                  Tablet: "px",
                  Mobile: "px"
                }
              };
            }
    
            if (typo.letterSpacing) {
              target[item].letterSpacing = {
                variable: `--fb-global-${item}--letter-spacing`,
                value: typo.letterSpacing,
                unit: typo.letterSpacingUnit || {
                  Desktop: "px",
                  Tablet: "px",
                  Mobile: "px"
                }
              };
            }
    
            if (typo.fontStyle) {
              target[item].fontStyle = {
                variable: `--fb-global-${item}--font-style`,
                value: typo.fontStyle
              };
            }
    
            if (typo.textTransform) {
              target[item].textTransform = {
                variable: `--fb-global-${item}--text-transform`,
                value: typo.textTransform
              };
            }
    
            if (typo.textDecoration) {
              target[item].textDecoration = {
                variable: `--fb-global-${item}--text-decoration`,
                value: typo.textDecoration
              };
            }
    
            if (typo.fontFamily) {
              target[item].fontFamily = {
                variable: `--fb-global-${item}--font-family`,
                value: typo.fontFamily
              };
            }
          }
        });
      };
    
      // normal typographies
      processTypographies(typography, updatedGlobalTypography);
    
      // custom typographies
      processTypographies(customTypography, updatedGlobalTypography);

      return updatedGlobalTypography;
  };

  useEffect(() => {      
      setGlobalTypography(handleSetGlobalTypography());
  }, []);
    
  useEffect(() => {
    const timeoutId = setTimeout(() => {
        generateCSSVariables(globalTypography, deviceType, "preview");
    }, 1000);

    // cleanup function
    return () => clearTimeout(timeoutId);

}, [globalTypography, deviceType]);

  const [patternsData] = usePostDataMutation();
  const getTemplatesData = async (route, key, id) => {
      try {
          const response = await patternsData({
              endpoint: route,
              body: {
                  [key]: id
              },
              headers: {
                  'Content-Type': 'application/json',
              },
          }).unwrap();
          console.log(key, response);
          return response;
      } catch (err) {
          console.error('Error:', err);
          console.error('Status:', err.status);
          console.error('Data:', err.data);
          if (err.status === 500) {
              console.error('Server error. Check the API endpoint and server logs.');
          }
      }
  };
  
  // Utility to extract font families
  const getAllFontFamilies = useCallback((fontsObject) => {
      const fontFamilies = [];

      const extractFonts = (obj) => {
        Object.values(obj).forEach((value) => {
          if (typeof value === "string") fontFamilies.push(value);
          else if (typeof value === "object") extractFonts(value);
        });
      };

      extractFonts(fontsObject);
      const fontsString = fontFamilies.join(",");
      loadGoogleFont(fontsString);
  }, []);


  const handleUpdateState = useCallback(async () => {
      const globalTypographyData = handleSetGlobalTypography();

      const settings = [
          {
              key: "fb_update_global_colors",
              data: globalColors,
              setter: setGlobalColors,
              storeKey: "fb_global_colors",
          },
          {
              key: "fb_update_custom_colors", 
              data: customColors,
              setter: setCustomColors,
              storeKey: "fb_custom_colors",
          },
          {
              key: "fb_update_gradient_colors",
              data: gradientColors,
              setter: setGradientColors,
              storeKey: "fb_gradient_colors",
          },
          {
              key: "fb_update_custom_gradient_colors",
              data: customGradientColors,
              setter: setCustomGradientColors,
              storeKey: "fb_custom_gradient_colors",
          },
          {
              key: "fb_update_typography",
              data: typography,
              setter: setTypography,
              storeKey: "fb_typography",
          },
          {
              key: "fb_update_custom_typography",
              data: customTypography,
              setter: setCustomTypography,
              storeKey: "fb_custom_typography",
          },
          {
              key: "fb_update_fontfamilies",
              data: fontFamilies,
              setter: setFontFamilies,
              storeKey: "fb_fontfamilies",
              postProcess: getAllFontFamilies,
          },
          {
              key: "fb_update_globaltypo",
              data: globalTypographyData,
              setter: null,
              storeKey: "fb_globaltypo",
              postProcess: (data) => generateCSSVariables(data, deviceType, 'import'),
          },
      ];
  
      try {
          for (const { key, data, setter, storeKey, postProcess } of settings) {
              try {
                  const response = await updateGlobalStyle(data, key);
                  
                  if (response.success) {
                      console.log('updated database successfully');
                      const updatedData = response.data.data;
                      
                      if (setter) {
                          setter(updatedData);
                      }
                      
                      localStorage.setItem(storeKey, JSON.stringify(updatedData));
                      
                      if (postProcess) {
                          setTimeout(() => postProcess(updatedData), 1000);
                      }

                      
                      console.log(`${storeKey} updated successfully:`, updatedData);
                  } else {
                      console.log('failed to update database');
                      if (setter) {
                          setter(data);
                      }

                      localStorage.setItem(storeKey, JSON.stringify(data));
                      
                      if (postProcess) {
                          setTimeout(() => postProcess(data), 1000);
                      }
                      
                      console.warn(`${storeKey} update failed, using current data:`, data);
                  }

              } catch (apiError) {
                  console.error(`API call failed for ${key}:`, apiError);
                  
                  // Fallback to current data
                  if (setter) {
                      setter(data);
                  }
                  
                  localStorage.setItem(storeKey, JSON.stringify(data));
                  
                  if (postProcess) {
                      setTimeout(() => postProcess(data), 1000);
                  }
                  
                  console.log(`${storeKey} set to fallback due to error:`, data);
              }
          }

          console.log('All states updated successfully');

          // Generate color variables
          const mergedColors = [
              ...(globalColors ?? []),
              ...(customColors ?? []),
              ...(gradientColors ?? []),
              ...(customGradientColors ?? []),
          ];

          const timeoutId = setTimeout(() => {
              generateColorsVariables(mergedColors, deviceType, "import");
          }, 1000);

          return () => clearTimeout(timeoutId);
          
      } catch (error) {
          console.error("Error updating global settings:", error);
      }
  }, [
      globalColors,
      customColors, 
      gradientColors,
      customGradientColors, 
      typography, 
      customTypography, 
      fontFamilies, 
      globalTypography,
      deviceType
  ]);


	useEffect(() => {
      const mergedColors = [
          ...(globalColors ?? []),
          ...(customColors ?? []),
          ...(gradientColors ?? []),
          ...(customGradientColors ?? []),
      ];
  
      const timeoutId = setTimeout(() => {
          generateColorsVariables(mergedColors, deviceType, "preview");
      }, 1000);
  
      // cleanup function
      return () => clearTimeout(timeoutId);
  
  }, [globalColors, customColors, gradientColors, customGradientColors, deviceType]);


  const handleStorePages = async (pages) => {
    if (!pages || pages.length === 0) {
        console.log("No pages to import.");
        return { success: true, skipped: true, successCount: 0, failedCount: 0, errors: [] };
    }

    // Step 1: Update site settings (once)
    try {
        const siteSettings = new FormData();
        siteSettings.append("action", "fb_update_site_settings");
        siteSettings.append("security", nonce);
        siteSettings.append("siteName", formData.siteName || "");
        siteSettings.append("siteTagline", formData.siteTagline || "");
        siteSettings.append("siteLogo", formData.siteLogo?.id || "");

        await fetch(ajaxUrl, {
            method: "POST",
            body: siteSettings,
            credentials: "same-origin",
        });
        console.log("Site settings updated");
    } catch (err) {
        console.warn("Failed to update site settings:", err);
    }

    // Step 2: Import pages
    let successCount = 0;
    let failedCount = 0;
    const errors = [];

    for (const page of pages) {
        try {
            let pageObj = page.page;
            if (typeof page.page === "string") {
                try {
                    pageObj = JSON.parse(page.page);
                } catch (err) {
                    console.error("JSON parse failed:", err);
                    pageObj = { content: page.page };
                }
            }

            const parsedBlocks = pageObj.content || "";

            const pageData = new FormData();
            pageData.append("action", "fb_pages_import");
            pageData.append("security", nonce);
            pageData.append("title", page.name);
            pageData.append("content", parsedBlocks || "");
            pageData.append("slug", page.slug || "");
            pageData.append("template", page.template || "fb-template-pages");
            pageData.append("badge", page.badge || "");
            pageData.append("site_url", window.location.origin);
            pageData.append("uploads_updated", uploadsUpdated);

            const response = await fetch(ajaxUrl, {
                method: "POST",
                body: pageData,
                credentials: "same-origin",
            });

            const result = await response.json();

            if (result.success) {
                successCount++;
                console.log(`Page created: ${page.title} (badge: ${page.badge || 'default'})`);
            } else {
                failedCount++;
                errors.push(`${page.title}: ${result.data?.message || 'Unknown error'}`);
                console.error(`Failed to create ${page.title}`, result.data);
            }
        } catch (error) {
            failedCount++;
            errors.push(`${page.title}: ${error.message}`);
            console.error(`Error creating ${page.title}:`, error);
        }
    }

    // Toast
    if (failedCount === 0) {
        toast.success(`All ${successCount} pages imported successfully!`, {
            position: "top-right",
            autoClose: 3000,
        });
    } else {
        toast.warn(`${successCount} pages imported, ${failedCount} failed.`, {
            position: "top-right",
            autoClose: 5000,
        });
    }

    return { success: failedCount === 0, successCount, failedCount, errors };
  };

  const handlePushTemplates = async (templates) => {
      if (!templates || templates.length === 0) {
          return { success: true, created: 0, skipped: 0, failed: 0, errors: [] };
      }

      let created = 0, skipped = 0, failed = 0;
      const errors = [];

      for (const tmpl of templates) {
          try {
              console.log(`Pushing: ${tmpl.slug}`);
              const result = await pushTemplate(tmpl);

              if (result.status === 'success') {
                  if (result.data.skipped) {
                      skipped++;
                  } else {
                      created++;

                      setTimeout(() => {
                          if (window.wp?.data?.dispatch) {
                              window.wp.data.dispatch('core/edit-site')?.invalidateResolution();
                              console.log("Site Editor cache invalidated");
                          }
                      }, 1000);
                  }
              } else {
                  failed++;
                  errors.push(`${tmpl.slug}: ${result.reason}`);
              }
          } catch (err) {
              failed++;
              errors.push(`${tmpl.slug}: ${err.message}`);
          }
      }

      // Even if some fail → continue to pages
      const success = failed === 0;
      console.log(`Templates: ${created} created, ${skipped} skipped, ${failed} failed`);

      return { success, created, skipped, failed, errors };
  };

  const pushTemplate = async (templateData) => {
      const form = new FormData();
      form.append('action', 'fb_push_template');
      form.append('security', nonce);
      form.append('title', templateData.title);
      form.append('slug', templateData.slug);
      form.append('content', templateData.content);

      // Fix: post_types as array → use same key
      (templateData.post_types || []).forEach(pt => {
          form.append('post_types[]', pt);
      });

      try {
          const response = await fetch(ajaxUrl, {
              method: 'POST',
              body: form,
              credentials: 'same-origin',
          });

          const text = await response.text();
          console.log("Raw Response:", text);

          let json;
          try {
              json = JSON.parse(text);
          } catch (e) {
              console.error("JSON Parse Error:", e, text);
              return { status: 'failed', reason: 'Invalid JSON response' };
          }

          if (json.success) {
              return { status: 'success', data: json.data };
          } else {
              return { status: 'failed', reason: json.data?.message || 'Unknown error' };
          }
      } catch (err) {
          console.error("Fetch Error:", err);
          return { status: 'failed', reason: err.message };
      }
  };

  const handlePushTemplateParts = async (parts) => {
      if (!parts || parts.length === 0) {
          console.log("No parts to push");
          return { success: true, created: 0, skipped: 0, errors: [] };
      }

      const form = new FormData();
      form.append('action', 'fb_push_template_parts');
      form.append('security', nonce);

      parts.forEach((part, index) => {
          form.append(`parts[${index}][title]`, part.title);
          form.append(`parts[${index}][slug]`, part.slug);
          form.append(`parts[${index}][content]`, part.content);
          form.append(`parts[${index}][area]`, part.area || 'uncategorized');
      });

      try {
          const response = await fetch(ajaxUrl, {
              method: 'POST',
              body: form,
          });

          const json = await response.json();

          if (json.success) {
              console.log(`Parts: ${json.data.created} created, ${json.data.skipped} skipped`);
              return {
                  success: true,
                  created: json.data.created,
                  skipped: json.data.skipped,
                  errors: json.data.errors || []
              };
          } else {
              console.error('Push parts failed:', json.data?.message);
              return { success: false, errors: [json.data?.message] };
          }
      } catch (err) {
          console.error('Push parts error:', err);
          return { success: false, errors: [err.message] };
      }
  };

  // Helper to POST FormData
  const postForm = async (form) => {
    const resp = await fetch(ajaxUrl, {
      method: "POST",
      body: form,
      credentials: "same-origin",
    });
    const json = await resp.json().catch(() => ({}));
    return { ok: resp.ok, status: resp.status, json };
  };

  // Upload files
  const uploadFiles = async (
    uploads = "https://templates.frontiswp.com/melinoe/wp-content/uploads/sites/14/2025.zip"
  ) => {
    console.log("Uploads ZIP URL:", uploads);

    if (!uploads) {
      console.warn("No uploads URL provided — skipping uploads step");
      return { skipped: true };
    }

    if (!ajaxUrl || !nonce) {
      console.error("Missing AJAX URL or nonce");
      return { skipped: true };
    }

    let attempts = 0;
    const maxAttempts = 3;

    while (attempts < maxAttempts) {
      try {
        console.log(`Uploading & extracting files (attempt ${attempts + 1}/${maxAttempts})...`);

        const form = new FormData();
        form.append("action", "fb_upload_files");
        form.append("security", nonce);
        form.append("uploads", uploads);

        const response = await fetch(ajaxUrl, {
          method: "POST",
          body: form,
          credentials: "same-origin",
        });

        const json = await response.json().catch(() => ({}));

        if (response.ok && json?.success) {
          console.log("Upload & extraction success:", json.data);
          setUploadsUpdated(true);
          return json.data;
        }

        throw new Error(json?.data?.message || json?.message || "Upload failed");
      } catch (err) {
        console.error(err);
        attempts++;
        if (attempts >= maxAttempts) {
          console.warn("All retries failed — skipping uploads step");
          setUploadsUpdated(false);
          return { skipped: true, reason: err.message || 'upload_failed'};
        }
        await new Promise((r) => setTimeout(r, 800));
      }
    }
  };

  // Activate theme
  const activateTheme = async (themeSlug = "frontis") => {
    const maxAttempts = 2;
  
    for (let attempt = 1; attempt <= maxAttempts; attempt++) {
      try {
        const form = new FormData();
        form.append("action", "fb_active_theme");
        form.append("security", nonce);
        form.append("theme_slug", themeSlug);
  
        const { ok, json } = await postForm(form);
  
        if (ok && json?.success) {
          console.log(`Theme "${themeSlug}" activated successfully`);
          return { status: "success", data: json.data || json };
        }
  
        throw new Error(json?.data?.message || json?.message || "Theme activation failed");
      } catch (err) {
        if (err.message.includes("already") || err.message.includes("activated")) {
          console.log(`Theme "${themeSlug}" skipped & already activated`);
          return { status: "skipped", reason: "already activated" };
        }
  
        console.warn(`Attempt ${attempt} failed:`, err.message);
  
        if (attempt === maxAttempts) {
          console.log(`Theme "${themeSlug}" skipped & failed: ${err.message}`);
          return { status: "failed", reason: err.message };
        }
  
        await new Promise((r) => setTimeout(r, 800));
      }
    }
  };
  

  // Install & activate plugins
  const installActivatePlugins = async (plugins = []) => {
    if (!Array.isArray(plugins) || !plugins.length) {
      console.log("No plugins to install - skipped");
      return { status: "skipped" };
    }
  
    const maxAttempts = 2;
  
    for (let attempt = 1; attempt <= maxAttempts; attempt++) {
      try {
        const form = new FormData();
        form.append("action", "fb_install_active_plugins");
        form.append("security", nonce);
        form.append("plugins", JSON.stringify(plugins));
  
        const { ok, json } = await postForm(form);
  
        if (ok && json?.success) {
          console.log(`Plugins installed & activated successfully`);
          return { status: "success", data: json.data || json };
        }
  
        throw new Error(json?.data?.message || json?.message || "Plugin install failed");
      } catch (err) {
        if (
          err.message.includes("already") ||
          err.message.includes("activated") ||
          err.message.includes("installed")
        ) {
          console.log(`Plugins skipped & already activated`);
          return { status: "skipped", reason: "already activated" };
        }
  
        console.warn(`Attempt ${attempt} failed:`, err.message);
  
        if (attempt === maxAttempts) {
          console.log(`Plugins skipped & failed: ${err.message}`);
          return { status: "failed", reason: err.message };
        }
  
        await new Promise((r) => setTimeout(r, 800));
      }
    }
  };
  

  const handleImport = async () => {
    setIsImporting(true);
    dispatch(setAttribute({ showFullSiteImportModal: true }));
  
    // Define steps once
    const allSteps = [
      { key: "fetch_site", label: "Fetching site data...", status: "pending" },
      { key: "upload_files", label: "Uploading and extracting files...", status: "pending" },
      { key: "theme", label: "Installing & activating theme...", status: "pending" },
      { key: "plugins", label: "Installing & activating plugins...", status: "pending" },
      { key: "template_parts", label: "Creating template parts...", status: "pending" },
      { key: "templates", label: "Creating templates...", status: "pending" },
      { key: "pages", label: "Creating pages...", status: "pending" },
      { key: "global_styles", label: "Updating global styles...", status: "pending" },
      { key: "finalize", label: "Finalizing setup...", status: "pending" },
    ];
  
    setStepOptions(allSteps);
  
    try {
      /** STEP 1: FETCH SITE **/
      setCurrentStep("fetch_site");
      updateStepStatus("fetch_site", "running");
      setImportProgress(5);
  
      const siteResp = await getTemplatesData("import/site", "site_id", template.id);
      if (!siteResp?.data) throw new Error("Failed to fetch site data");
      updateStepStatus("fetch_site", "success");
  
      const siteData = siteResp.data;
      const pages = siteData.pages || [];
      const templates = siteData.templates || templatesData;
      const allTemplateParts = siteData.templateParts || templatePartsData;
      const uploads = siteData.uploads_url || "https://templates.frontiswp.com/melinoe/wp-content/uploads/sites/14/2025.zip";
  
      /** STEP 2: UPLOAD FILES **/
      setCurrentStep("upload_files");
      updateStepStatus("upload_files", "running");
      setImportProgress(20);
  
      const uploadRes = await uploadFiles(uploads);
      updateStepStatus("upload_files", uploadRes?.skipped ? "skipped" : "success");
  
      /** STEP 3: THEME **/
      setCurrentStep("theme");
      updateStepStatus("theme", "running");
      setImportProgress(35);
  
      const themeRes = await activateTheme(template.theme || "frontis");
      updateStepStatus("theme", themeRes?.skipped ? "skipped" : "success");
  
      /** STEP 4: PLUGINS **/
      setCurrentStep("plugins");
      updateStepStatus("plugins", "running");
      setImportProgress(55);
  
      const pluginRes = await installActivatePlugins(template.dependencies || []);
      updateStepStatus("plugins", pluginRes?.skipped ? "skipped" : "success");

      // STEP 5: FETCH & PUSH TEMPLATE PARTS
      setCurrentStep("template_parts");
      updateStepStatus("template_parts", "running");
      setImportProgress(60);

      console.log("Pushing Template Parts:", allTemplateParts);

      const partsResult = await handlePushTemplateParts(allTemplateParts || []);
      updateStepStatus("template_parts", partsResult.success ? "success" : "warning");

      // STEP 5.5: TEMPLATES
      setCurrentStep("templates");
      updateStepStatus("templates", "running");
      setImportProgress(65);

      const templateResult = await handlePushTemplates(templates || []);
      updateStepStatus("templates", templateResult.success ? "success" : "warning");

      // STEP 6: PAGES
      setCurrentStep("pages");
      updateStepStatus("pages", "running");
      setImportProgress(80);

      const pageResult = await handleStorePages(pages || []);
      updateStepStatus("pages", pageResult.success ? "success" : "warning");

      // Update global Styles
      setCurrentStep("global_styles");
      updateStepStatus("global_styles", "running");
      setImportProgress(90);

      await handleUpdateState();
      updateStepStatus("global_styles", "success");

      /** STEP 6: FINALIZE **/
      setCurrentStep("finalize");
      updateStepStatus("finalize", "running");
      setImportProgress(100);
  
      await new Promise(r => setTimeout(r, 600));
      updateStepStatus("finalize", "success");

  
      dispatch(setAttribute({ importSuccess: true }));

    } catch (err) {
      console.error("Import Error:", err);
      dispatch(setAttribute({ importSuccess: false }));
      toast.error("Import failed. See console for details");
  
    } finally {
      setIsImporting(false);
    }
  };

  
  const getTemplates = async (postType = 'page') => {
    const maxAttempts = 2;
  
    for (let attempt = 1; attempt <= maxAttempts; attempt++) {
      try {
        const form = new FormData();
        form.append('action', 'fb_get_templates');
        form.append('security', nonce); // Nonce from localized script.
        form.append('post_type', postType);
  
        const response = await fetch(ajaxUrl, {
          method: 'POST',
          body: form,
        });
  
        const ok = response.ok;
        const json = await response.json();
  
        if (ok && json?.success) {
          return { status: 'success', data: json.data.templates };
        }
  
        throw new Error(json?.data?.message || json?.message || 'Template fetch failed');
      } catch (err) {
        console.warn(`Attempt ${attempt} failed:`, err.message);
  
        if (attempt === maxAttempts) {
          console.log(`Failed to fetch templates for "${postType}": ${err.message}`);
          return { status: 'failed', reason: err.message };
        }
  
        await new Promise((resolve) => setTimeout(resolve, 800));
      }
    }
  };


  const getAllTemplateParts = async () => {
    const form = new FormData();
    form.append('action', 'fb_get_all_template_parts');
    form.append('security', nonce);

    try {
        const res = await fetch(ajaxUrl, { method: 'POST', body: form });
        const json = await res.json();

        if (json.success) {
            return json.data.template_parts;
        }

        console.warn('No parts found:', json.data?.message);
        return [];
    } catch (err) {
        console.error('Error fetching all parts:', err);
        return [];
    }
  };

  useEffect(() => {
    const fetch = async () => {
        const allParts = await getAllTemplateParts();
        dispatch(setAttribute({ templateParts: allParts }));
    };
    fetch();
  }, []);


  useEffect(() => {
    const fetchTemplates = async () => {
      dispatch(setAttribute({ pageTemplatesLoading: true }));
      const result = await getTemplates('page'); // Call for 'page' post type.

      if (result.status === 'success') {
        dispatch(setAttribute({ pageTemplates: result.data }));
        dispatch(setAttribute({ pageTemplatesError: null }));
      } else {
        dispatch(setAttribute({ pageTemplatesError: result.reason }));
        dispatch(setAttribute({ pageTemplates: [] }));
      }
      dispatch(setAttribute({ pageTemplatesLoading: false }));
    };

    fetchTemplates();
  }, []);


  return (
    
    <>
        <div className={`fb-import-form-panel ${isSidebarCollapsed ? 'collapsed' : ''}`}>
            <div className="fb-form-section">
                <span className="fb-template-label">Template Name:</span>
                <h6 className="fb-template-title">{template?.title || 'Renovate - Home Decor Website Template'}</h6>
                <FsiGbTypography
                    template={template}
                    globalColors={globalColors}
                    setGlobalColors={setGlobalColors}
                    customColors={customColors}
                    setCustomColors={setCustomColors}
                    gradientColors={gradientColors}
                    setGradientColors={setGradientColors}
                    customGradientColors={customGradientColors}
                    setCustomGradientColors={setCustomGradientColors}
                    typography={typography}
                    setTypography={setTypography}
                    customTypography={customTypography}
                    setCustomTypography={setCustomTypography}
                    fontFamilies={fontFamilies}
                    setFontFamilies={setFontFamilies}
                    globalTypography={globalTypography}
                    setGlobalTypography={setGlobalTypography}
                />
            </div>

            <div className="fb-import-actions">
                <div className="fb-import-step-btn-wrapper">
                    <button
                        className="fb-import-btn next"
                        onClick={handleImport}
                    >
                        Import Now
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M4 12H20M20 12L14 6M20 12L14 18" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </button>
                    <button
                        className="fb-import-btn back"
                        onClick={onBack}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M20 12H4M4 12L10 6M4 12L10 18" stroke="#6A758E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        Back
                    </button>
                </div>
            </div>
        </div>
        {showFullSiteImportModal && (
          <FullSiteImportModal
            steps={stepsOptions}
            currentStep={currentStep}
            progress={importProgress}
            onCloseModal={() => {
              dispatch && dispatch(setAttribute({ showFullSiteImportModal: false }));
              dispatch && dispatch(setAttribute({ sitePreviewLoading: true }));
              onClose && onClose();
              setCurrentStep("");
              setStepOptions([]);
            }}
            frontPageUrl="/"
            isImporting={isImporting}
          />
        )}
    </>
  )
}

export default FullSiteImportSettingConfig;