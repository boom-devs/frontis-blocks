import { __ } from "@wordpress/i18n";
import { ClipLoader } from "react-spinners";
import FsiGbTypography from "../global-settings/global-settings";
import { useCallback, useEffect, useState } from "@wordpress/element";
import { useDeviceType } from "@Config/displayType";
import generateCSSVariables from "../global-settings/components/GenerateRootCss";
import { updateGlobalStyle } from "../global-settings/fetch";
import { loadGoogleFont } from "../global-settings/helper";
import generateColorsVariables from "../global-settings/components/GenerateColorRoot";
import { parse, serialize } from "@wordpress/blocks";
import { usePostDataMutation } from "../services/laravelapi";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { setAttribute } from "../store/attributesSlice";

const FullSiteImportSettingConfig = ({
    template, 
    onBack, 
    isSidebarCollapsed, 
    formData,
    onClose
}) => {

  const [isImporting, setIsImporting] = useState(false);
  const [importProgress, setImportProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState('');

  const [globalColors, setGlobalColors] = useState(template.colors);
	const [customColors, setCustomColors] = useState(template.colors);
	const [gradientColors, setGradientColors] = useState(template.gradientColors);
	const [customGradientColors, setCustomGradientColors] = useState(template.gradientColors);
	const [typography, setTypography] = useState(template.typographies);
	const [customTypography, setCustomTypography] = useState(template.customTypographies);
	const [fontFamilies, setFontFamilies] = useState([]);
	const [globalTypography, setGlobalTypography] = useState({});

  const dispatch = useDispatch();

  const { nonce, ajaxUrl } = window.frontisBlocksAdmin;
  const deviceType = useDeviceType();


    // Set global typography
    useEffect(() => {
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
      
        setGlobalTypography(updatedGlobalTypography);
    }, []);
      

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


  // const handleStorePages = async () => {
  //   const site = await getTemplatesData("import/site", "site_id", template.id);

  //   if (site.data) {
  //       try {
  //           const siteData = site.data.pages;

  //           // First update site settings (once only)
  //           const siteSettings = new FormData();
  //           siteSettings.append("action", "fb_update_site_settings");
  //           siteSettings.append("security", nonce);
  //           siteSettings.append("siteName", formData.siteName || "");
  //           siteSettings.append("siteTagline", formData.siteTagline || "");
  //           siteSettings.append("siteLogo", formData.siteLogo.id || "");

  //           await fetch(ajaxUrl, {
  //               method: "POST",
  //               body: siteSettings,
  //               credentials: "same-origin",
  //           });

  //           // Then import pages one by one
  //           for (const page of siteData) {
  //               try {
  //                   let pageObj = page.page;
  //                   if (typeof page.page === "string") {
  //                       try {
  //                           pageObj = JSON.parse(page.page);
  //                       } catch (err) {
  //                           console.error("JSON parse failed:", err);
  //                           pageObj = { content: page.page };
  //                       }
  //                   }

  //                   const parsedBlocks = pageObj.content || "";

  //                   const pageData = new FormData();
  //                   pageData.append("action", "fb_full_site_import");
  //                   pageData.append("security", nonce);
  //                   pageData.append("title", page.name);
  //                   pageData.append("content", parsedBlocks);

  //                   const response = await fetch(ajaxUrl, {
  //                       method: "POST",
  //                       body: pageData,
  //                       credentials: "same-origin",
  //                   });

  //                   const result = await response.json();

  //                   if (result.success) {
  //                       console.log(`${page.name} created successfully`);
  //                   } else {
  //                       console.error(`Failed to create ${page.name}`, result.data);
  //                   }
  //               } catch (error) {
  //                   console.error(`Error creating ${page.name}:`, error);
  //               }
  //           }

  //           toast.success("Site imported successfully!", {
  //             position: "top-right",
  //             autoClose: 3000,
  //             theme: "light",
  //           });
  //       } catch (err) {
  //           console.error("Import error:", err);
  //           toast.error("Failed to import site", {
  //               position: "top-right",
  //               autoClose: 3000,
  //           });
  //       }
  //   }
  // };

    
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
        const settings = [
            // {
            //     key: "fb_update_global_colors",
            //     data: globalColors,
            //     setter: setGlobalColors,
            //     storeKey: "fb_global_colors",
            // },
            {
                key: "fb_update_custom_colors", 
                data: customColors,
                setter: setCustomColors,
                storeKey: "fb_custom_colors",
            },
            // {
            //     key: "fb_update_gradient_colors",
            //     data: gradientColors,
            //     setter: setGradientColors,
            //     storeKey: "fb_gradient_colors",
            // },
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
                data: globalTypography,
                setter: setGlobalTypography,
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
                // ...(gradientColors ?? []),
                // ...(globalColors ?? (Array.isArray(template.colors) ? template.colors : [])),
            ];

            const timeoutId = setTimeout(() => {
                generateColorsVariables(mergedColors, deviceType, "import");
            }, 1000);

            return () => clearTimeout(timeoutId);
            
        } catch (error) {
            console.error("Error updating global settings:", error);
        }
    }, [
        // globalColors, 
        customColors, 
        // gradientColors, 
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
            // ...(gradientColors ?? []),
            // ...(globalColors ?? (Array.isArray(template.colors) ? template.colors : [])),
        ];
    
        const timeoutId = setTimeout(() => {
            generateColorsVariables(mergedColors, deviceType, "preview");
        }, 1000);
    
        // cleanup function
        return () => clearTimeout(timeoutId);
    
    }, [customColors, customGradientColors, deviceType]);


	useEffect(() => {
        const timeoutId = setTimeout(() => {
            generateCSSVariables(globalTypography, deviceType, "preview");
        }, 1000);
    
        // cleanup function
        return () => clearTimeout(timeoutId);
    
    }, [globalTypography, deviceType]);


  // const handleImport = useCallback(async () => {
  //       setIsImporting(true);
  //       setImportProgress(0);
      
  //       const steps = [
  //         "Preparing import...",
  //         "Importing content...",
  //         "Setting up customizer...",
  //         "Configuring widgets...",
  //         "Creating pages...",
  //         "Finalizing setup...",
  //       ];
      
  //       try {
  //         for (let i = 0; i < steps.length; i++) {
  //           setCurrentStep(steps[i]);
  //           setImportProgress(((i + 1) / steps.length) * 100);
      
  //           if (steps[i] === "Creating pages...") {
  //             await handleStorePages();
  //           } else {
  //             await new Promise((resolve) => setTimeout(resolve, 1500));
  //           }
  //         }
      
  //         handleUpdateState();
  //         onClose();
  //         dispatch(setAttribute({ importSuccess: true }));
  //       } catch (error) {
  //         console.error("Import failed:", error);
  //         dispatch(setAttribute({ importSuccess: false }));
  //       } finally {
  //         setIsImporting(false);
  //         setImportProgress(0);
  //         setCurrentStep("");
  //       }
  //     }, [
  //       template?.id,
  //       formData,
  //       onClose, 
  //       customColors,
  //       customGradientColors,
  //       typography,
  //       customTypography,
  //       fontFamilies,
  //       globalTypography,
  // ]);      

  // Utility: POST formdata helper
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
  const uploadFiles = async (uploads) => {
    // If no URL, skip
    if (!uploads) {
      console.warn("No uploads URL provided — skipping uploads step");
      return { skipped: true };
    }
  
    let attempts = 0;
    const maxAttempts = 3;
  
    while (attempts < maxAttempts) {
      try {
        setCurrentStep(`Uploading & extracting files (attempt ${attempts + 1}/${maxAttempts})...`);
        setImportProgress((p) => Math.max(p, 5));
  
        const form = new FormData();
        form.append("action", "fb_upload_files");
        form.append("security", nonce);
        form.append("uploads", uploads);
  
        const { ok, status, json } = await postForm(form);
  
        if (ok && json?.success) {
          return json;
        }
  
        throw new Error(`Upload failed attempt ${attempts + 1}`);
  
      } catch (err) {
        console.error(err);
        attempts++;
        if (attempts >= maxAttempts) {
          console.warn("All retries failed — skipping uploads step");
          return { skipped: true };
        }
        await new Promise((r) => setTimeout(r, 800));
      }
    }
  };

  // 2) Install & activate plugins
  const installPlugins = async () => {
    setCurrentStep("Installing & activating plugins...");
    setImportProgress((p) => Math.max(p, 25));

    const form = new FormData();
    form.append("action", "fb_install_active_plugins");
    form.append("security", nonce);
    // Optionally append plugin list: form.append('plugins', JSON.stringify([...]));

    const { ok, status, json } = await postForm(form);

    if (!ok || (json && json.success === false)) {
      console.error("installPlugins failed", status, json);
      throw new Error("Plugin install step failed");
    }

    return json;
  };

  // 3) Install / activate theme (calls your active_theme PHP)
  const activateTheme = async () => {
    setCurrentStep("Installing & activating theme...");
    setImportProgress((p) => Math.max(p, 50));

    const form = new FormData();
    form.append("action", "fb_active_theme");
    form.append("security", nonce);
    // Optionally append theme slug/version
    // form.append('theme_slug', 'frontis');

    const { ok, status, json } = await postForm(form);

    if (!ok || (json && json.success === false)) {
      console.error("activateTheme failed", status, json);
      throw new Error("Theme install step failed");
    }

    return json;
  };

  // 4) Update database (menus, widgets, customizer) from frontis-portal
  const updateDatabase = async (portalPayload = {}) => {
    setCurrentStep("Importing database (menus/widgets/customizer) ...");
    setImportProgress((p) => Math.max(p, 70));

    const form = new FormData();
    form.append("action", "fb_update_database"); // maps to update_database PHP method
    form.append("security", nonce);
    // If DB import expects some payload from portal, pass it:
    // form.append('payload', JSON.stringify(portalPayload));

    const { ok, status, json } = await postForm(form);

    if (!ok || (json && json.success === false)) {
      console.error("updateDatabase failed", status, json);
      throw new Error("Database import step failed");
    }

    return json;
  };

  // Existing function to create pages already in your snippet — I reuse it
  const handleStorePages = async (sitePages) => {
    // sitePages is array of pages from portal
    for (const page of sitePages) {
      try {
        let pageObj = page.page;
        if (typeof page.page === "string") {
          try {
            pageObj = JSON.parse(page.page);
          } catch (err) {
            pageObj = { content: page.page };
          }
        }
        const parsedBlocks = pageObj.content || "";

        const pageData = new FormData();
        pageData.append("action", "fb_full_site_import");
        pageData.append("security", nonce);
        pageData.append("title", page.name);
        pageData.append("content", parsedBlocks);

        const res = await fetch(ajaxUrl, { method: "POST", body: pageData, credentials: "same-origin" });
        const result = await res.json();

        if (result.success) {
          console.log(`${page.name} created successfully`);
        } else {
          console.error(`Failed to create ${page.name}`, result);
        }
      } catch (err) {
        console.error(`Error creating ${page.name}`, err);
      }
    }
  };

  // Full import flow
  const handleImport = useCallback(async () => {
    setIsImporting(true);
    setImportProgress(0);
    try {
      // 0) fetch site data from portal
      setCurrentStep("Fetching site from portal...");
      setImportProgress(2);
      const siteResp = await getTemplatesData("import/site", "site_id", template.id);
      if (!siteResp || !siteResp.data) throw new Error("Failed to fetch site data from portal");
      const siteData = siteResp.data;
      const pages = siteData.pages || [];
      const uploads = siteData.uploads_url || [];

      // Step A: upload files
      await uploadFiles(uploads);
      setImportProgress(20);

      // Step B: install plugins
      await installPlugins();
      setImportProgress(40);

      // Step C: install & activate theme
      await activateTheme();
      setImportProgress(60);

      // Step D: update database (menus/widgets/customizer)
      // If the portal gives payload for DB import, pass it. Otherwise PHP will fetch from portal internally.
      await updateDatabase(siteData.database_payload || {});
      setImportProgress(80);

      // Step E: update site settings (one-time)
      setCurrentStep("Updating site settings...");
      const siteSettings = new FormData();
      siteSettings.append("action", "fb_update_site_settings");
      siteSettings.append("security", nonce);
      siteSettings.append("siteName", siteData.siteName || "");
      siteSettings.append("siteTagline", siteData.siteTagline || "");
      siteSettings.append("siteLogo", (siteData.siteLogo && siteData.siteLogo.id) || "");
      await fetch(ajaxUrl, {
        method: "POST",
        body: siteSettings,
        credentials: "same-origin",
      });
      setImportProgress(85);

      // Step F: create pages
      setCurrentStep("Creating pages...");
      await handleStorePages(pages);
      setImportProgress(98);

      // finalize
      setCurrentStep("Finalizing setup...");
      await new Promise((resolve) => setTimeout(resolve, 600)); // small pause for UX

      handleUpdateState && handleUpdateState();
      onClose && onClose();
      dispatch && dispatch(setAttribute({ importSuccess: true }));

      toast.success("Site imported successfully!", { position: "top-right", autoClose: 3000, theme: "light" });
    } catch (err) {
      console.error("Import failed:", err);
      dispatch && dispatch(setAttribute({ importSuccess: false }));
      toast.error("Import failed. Check console for details", { position: "top-right", autoClose: 5000 });
    } finally {
      setIsImporting(false);
      setImportProgress(0);
      setCurrentStep("");
    }
  }, [template?.id, nonce, ajaxUrl, getTemplatesData]);


  return (
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
                            {isImporting ? (
                                <div className="fb-import-progress">
                                    <div className="fb-progress-info">
                                        <ClipLoader color="#3B82F6" size={20} />
                                        <span className="fb-progress-text">{currentStep}</span>
                                    </div>
                                    <div className="fb-progress-bar">
                                        <div
                                            className="fb-progress-fill"
                                            style={{ width: `${importProgress}%` }}
                                        ></div>
                                    </div>
                                    <span className="fb-progress-percentage">{Math.round(importProgress)}%</span>
                                </div>
                            ) : (
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
                            )}
                        </div>
                    </div>
  )
}

export default FullSiteImportSettingConfig;