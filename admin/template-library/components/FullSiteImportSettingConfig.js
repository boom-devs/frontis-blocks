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


  const [isImporting, setIsImporting] = useState(false);
  const [importProgress, setImportProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState("");
  const [stepsOptions, setStepOptions] = useState([]);
  const [uploadsUpdated, setUploadsUpdated] = useState(false);
  const [isImportFailed, setIsImportFailed] = useState(false);

  const updateStepStatus = (key, status, cascade = false) => {
    setStepOptions(prev => {
      if (!cascade) {
        return prev.map(step =>
          step.key === key ? { ...step, status } : step
        );
      }
      let found = false;
      return prev.map(step => {
        if (step.key === key) found = true;
        if (found) {
          return { ...step, status: "failed" };
        }
        return step;
      });
    });
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
              key: "fb_update_custom_colors", 
              data: customColors,
              setter: setCustomColors,
              storeKey: "fb_custom_colors",
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
              ...(customColors ?? []),
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
      customColors, 
      customGradientColors, 
      typography, 
      customTypography, 
      fontFamilies, 
      globalTypography,
      deviceType
  ]);


	useEffect(() => {
      const mergedColors = [
          ...(customColors ?? []),
          ...(customGradientColors ?? []),
      ];
  
      const timeoutId = setTimeout(() => {
          generateColorsVariables(mergedColors, deviceType, "preview");
      }, 1000);
  
      // cleanup function
      return () => clearTimeout(timeoutId);
  
  }, [customColors, customGradientColors, deviceType]);


  const handleStorePages = async (pages, uploadsUpdatedOverride = null) => {
    const isUploadsUpdated = uploadsUpdatedOverride !== null ? uploadsUpdatedOverride : uploadsUpdated;
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
            const parsedBlocks = page.content || "";

            const pageData = new FormData();
            pageData.append("action", "fb_pages_import");
            pageData.append("security", nonce);
            pageData.append("title", page.title);
            pageData.append("content", parsedBlocks || "");
            pageData.append("slug", page.slug || "");
            pageData.append("template", page.template || "");
            pageData.append("badge", page.badge || "");
            pageData.append("site_url", template?.preview_url || window.location.origin);
            pageData.append("uploads_updated", isUploadsUpdated);

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

  const handleStorePosts = async (posts = [], uploadsUpdatedOverride = null) => {
    const isUploadsUpdated = uploadsUpdatedOverride !== null ? uploadsUpdatedOverride : uploadsUpdated;
    if (!posts || posts.length === 0) {
        console.log("No posts to import.");
        return { success: true, count: 0 };
    }

    let successCount = 0;
    let failedCount = 0;

    for (const post of posts) {
        try {
            const formData = new FormData();
            formData.append("action", "fb_posts_import");
            formData.append("security", nonce);
            formData.append("title", post.title || "Untitled");
            formData.append("content", post.content || "");
            formData.append("slug", post.slug || "");
            formData.append("template", post.template || "");
            formData.append("uploads_updated", isUploadsUpdated);
            formData.append("site_url", template?.preview_url || window.location.origin);

            const res = await fetch(ajaxUrl, {
                method: "POST",
                body: formData,
                credentials: "same-origin"
            });

            const result = await res.json();

            if (result.success) {
                successCount++;
                console.log(`Post created: ${post.title} → Template: ${post.template || 'default'}`);
            } else {
                failedCount++;
                console.error("Failed:", post.title, result.data);
            }
        } catch (err) {
            failedCount++;
            console.error("Error importing post:", post.title, err);
        }
    }

    toast[failedCount === 0 ? 'success' : 'warn'](
        failedCount === 0 
            ? `All ${successCount} posts imported!` 
            : `${successCount} posts imported, ${failedCount} failed`
    );

    return { success: failedCount === 0, successCount, failedCount };
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

  // 1. Header + Footer + Auto Navigation Import
const handleImportHeadersFooters = async (headers = [], footers = [], uploadsUpdatedOverride = null) => {
    const isUploadsUpdated = uploadsUpdatedOverride !== null ? uploadsUpdatedOverride : uploadsUpdated;
    if ((!headers || headers.length === 0) && (!footers || footers.length === 0)) {
        console.log("No headers or footers to import.");
        return { success: true, mapping: {}, stats: { nav_created: 0, part_created: 0 } };
    }

    const form = new FormData();
    form.append('action', 'fb_import_headers_footers');
    form.append('security', nonce);
    form.append('headers', JSON.stringify(headers));
    form.append('footers', JSON.stringify(footers));
    form.append('uploads_updated', isUploadsUpdated);
    form.append('site_url', template?.preview_url || window.location.origin);

    try {
        const response = await fetch(ajaxUrl, {
            method: 'POST',
            body: form,
            credentials: 'same-origin',
        });

        const result = await response.json();

        if (result.success) {
            const { stats, mapping } = result.data;
            const navMsg = stats.nav_created > 0 ? `${stats.nav_created} navigations created, ` : '';
            toast.success(`Headers & Footers imported! ${navMsg}${stats.part_created} parts created`);
            
            return {
                success: true,
                mapping,
                stats
            };
        } else {
            throw new Error(result.data?.message || 'Header/Footer import failed');
        }
    } catch (err) {
        console.error('Header/Footer import error:', err);
        toast.error(`Header/Footer import failed: ${err.message}`);
        return { success: false, error: err.message };
    }
};

// 2. Templates Import (with navigation mapping)
const handleImportTemplates = async (templates = [], navigationMapping = {}, uploadsUpdatedOverride = null) => {
    const isUploadsUpdated = uploadsUpdatedOverride !== null ? uploadsUpdatedOverride : uploadsUpdated;
    if (!templates || templates.length === 0) {
        console.log("No templates to import.");
        return { success: true, created: 0, skipped: templates.length };
    }

    const form = new FormData();
    form.append('action', 'fb_import_templates');
    form.append('security', nonce);
    form.append('templates', JSON.stringify(templates));
    form.append('mapping', JSON.stringify(navigationMapping));
    form.append('uploads_updated', isUploadsUpdated);
    form.append('site_url', template?.preview_url || window.location.origin);

    try {
        const response = await fetch(ajaxUrl, {
            method: 'POST',
            body: form,
            credentials: 'same-origin',
        });

        const result = await response.json();

        if (result.success) {
            const { created, skipped } = result.data;
            toast.success(`Templates imported: ${created} created, ${skipped} skipped`);
            
            return { success: true, created, skipped };
        } else {
            throw new Error(result.data?.message || 'Templates import failed');
        }
    } catch (err) {
        console.error('Templates import error:', err);
        toast.error(`Templates import failed: ${err.message}`);
        return { success: false, error: err.message };
    }
};
  

  const handleGenerateAssets = () => {
    return new Promise((resolve, reject) => {
      let batch = 0;

      const processNextBatch = () => {
        window.jQuery.ajax({
          url: ajaxUrl,
          type: 'POST',
          data: {
            action: 'fb_generate_assets',
            security: nonce,
            batch: batch,
          },
          success: (response) => {
            if (response.success) {
              if (response.data.completed) {
                console.log("Asset generation completed");
                resolve({ success: true, message: response.data.message });
              } else {
                batch++;
                processNextBatch();
              }
            } else {
              console.error("Asset generation failed:", response.data?.message);
              reject(new Error(response.data?.message || "Asset generation failed"));
            }
          },
          error: (xhr, status, error) => {
            console.error("Error in asset generation:", status, error);
            reject(new Error(`${status}: ${error}`));
          }
        });
      };

      processNextBatch();
    });
  };
  

  const handleImport = useCallback(async () => {
    setIsImporting(true);
    setIsImportFailed(false);
    dispatch(setAttribute({ showFullSiteImportModal: true, importSuccess: null }));
  
    // Define steps once
    const allSteps = [
      { key: "fetch_site", label: "Fetching site data...", status: "pending" },
      { key: "upload_files", label: "Uploading and extracting files...", status: "pending" },
      { key: "theme", label: "Installing & activating theme...", status: "pending" },
      { key: "plugins", label: "Installing & activating plugins...", status: "pending" },
      { key: "headers", label: "Creating headers...", status: "pending" },
      { key: "footers", label: "Creating footers...", status: "pending" },
      { key: "templates", label: "Creating templates...", status: "pending" },
      { key: "pages", label: "Creating pages...", status: "pending" },
      { key: "posts", label: "Creating posts...", status: "pending" },
      { key: "global_styles", label: "Updating global styles...", status: "pending" },
      { key: "asset_generation", label: "Generating assets...", status: "pending" },
      { key: "finalize", label: "Finalizing setup...", status: "pending" },
    ];
  
    setStepOptions(allSteps);
    let activeStepKey = "";
  
    try {
      /** STEP 1: FETCH SITE **/
      activeStepKey = "fetch_site";
      setCurrentStep(activeStepKey);
      updateStepStatus(activeStepKey, "running");
      setImportProgress(5);
  
      const siteResp = await getTemplatesData("import/site", "site_id", template.id);
      if (!siteResp?.data) throw new Error("Failed to fetch site data");
      updateStepStatus(activeStepKey, "success");
  
      const siteData = siteResp.data;
      const pages = siteData?.pages || [];
      const posts = siteData?.posts || [];
      const templates = siteData?.templates || [];
      const headers = siteData?.headers || [];
      const footers = siteData?.footers || [];
      const uploads = siteData?.uploads_url || '';

      console.log("Site data:", siteData);
  
      /** STEP 2: UPLOAD FILES **/
      activeStepKey = "upload_files";
      setCurrentStep(activeStepKey);
      updateStepStatus(activeStepKey, "running");
      setImportProgress(20);
  
      const uploadRes = await uploadFiles(uploads);
      const isUploadsSuccessful = !uploadRes?.skipped;
      updateStepStatus("upload_files", uploadRes?.skipped ? "skipped" : "success");
  
      /** STEP 3: THEME **/
      activeStepKey = "theme";
      setCurrentStep(activeStepKey);
      updateStepStatus(activeStepKey, "running");
      setImportProgress(30);
  
      const themeRes = await activateTheme(template.theme || "frontis");
      updateStepStatus(activeStepKey, themeRes?.skipped ? "skipped" : "success");
  
      /** STEP 4: PLUGINS **/
      activeStepKey = "plugins";
      setCurrentStep(activeStepKey);
      updateStepStatus(activeStepKey, "running");
      setImportProgress(45);
  
      const pluginRes = await installActivatePlugins(template.dependencies || []);
      updateStepStatus(activeStepKey, pluginRes?.skipped ? "skipped" : "success");

      // After plugins step...
      activeStepKey = "headers";
      setCurrentStep("headers");
      updateStepStatus("headers", "running");
      updateStepStatus("footers", "running");
      setImportProgress(55);

      let navigationMapping = {};

      // Step 5: Import Headers + Footers (with auto navigation creation)
      const hfResult = await handleImportHeadersFooters(headers, footers, isUploadsSuccessful);

      if (hfResult.success) {
          navigationMapping = hfResult.mapping || {};
          updateStepStatus("headers", "success");
          updateStepStatus("footers", "success");
      } else {
          updateStepStatus("headers", "failed");
          updateStepStatus("footers", "failed");
          activeStepKey = "headers"; // or both
          throw new Error("Header/Footer import failed");
      }

      setImportProgress(65);

      // Step 6: Import Templates (using navigation mapping)
      activeStepKey = "templates";
      setCurrentStep(activeStepKey);
      updateStepStatus(activeStepKey, "running");

      const templateResult = await handleImportTemplates(templates, navigationMapping, isUploadsSuccessful);

      if (templateResult.success) {
          updateStepStatus(activeStepKey, "success");
      } else {
          updateStepStatus(activeStepKey, "failed");
          throw new Error("Templates import failed");
      }

      setImportProgress(70);

      // STEP 6: PAGES
      activeStepKey = "pages";
      setCurrentStep(activeStepKey);
      updateStepStatus(activeStepKey, "running");
      setImportProgress(75);

      const pageResult = await handleStorePages(pages || [], isUploadsSuccessful);
      updateStepStatus(activeStepKey, pageResult.success ? "success" : "warning");

      // STEP 7: POSTS
      activeStepKey = "posts";
      setCurrentStep(activeStepKey);
      updateStepStatus(activeStepKey, "running");
      setImportProgress(80);

      const postsResult = await handleStorePosts(posts || [], isUploadsSuccessful);
      updateStepStatus(activeStepKey, postsResult.success ? "success" : "warning");

      // STEP 8: Update global Styles
      activeStepKey = "global_styles";
      setCurrentStep(activeStepKey);
      updateStepStatus(activeStepKey, "running");
      setImportProgress(90);

      await handleUpdateState();
      updateStepStatus(activeStepKey, "success");

      // STEP 9: Asset Generation
      activeStepKey = "asset_generation";
      setCurrentStep(activeStepKey);
      updateStepStatus(activeStepKey, "running");
      setImportProgress(95);

      try {
        await handleGenerateAssets();
        updateStepStatus("asset_generation", "success");
      } catch (assetErr) {
        console.warn("Asset generation encountered an issue:", assetErr);
        updateStepStatus("asset_generation", "warning");
      }

      // STEP 10: FINALIZE
      activeStepKey = "finalize";
      setCurrentStep(activeStepKey);
      updateStepStatus(activeStepKey, "running");
      setImportProgress(100);
  
      await new Promise(r => setTimeout(r, 600));
      updateStepStatus(activeStepKey, "success");

  
      dispatch(setAttribute({ importSuccess: true }));

    } catch (err) {
      console.error("Import Error:", err);
      setIsImportFailed(true);
      if (activeStepKey) {
        updateStepStatus(activeStepKey, "failed", true);
      }
      dispatch(setAttribute({ importSuccess: false }));
      toast.error("Import failed. See console for details");
  
    } finally {
      setIsImporting(false);
    }
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
            isImportFailed={isImportFailed}
            onRetry={handleImport}
          />
        )}
    </>
  )
}

export default FullSiteImportSettingConfig;