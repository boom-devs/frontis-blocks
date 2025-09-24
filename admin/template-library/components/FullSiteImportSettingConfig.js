import { __ } from "@wordpress/i18n";
import { ClipLoader } from "react-spinners";
import FsiGbTypography from "../global-settings/global-settings";
import { useCallback, useEffect, useState } from "@wordpress/element";
import { useDeviceType } from "@Config/displayType";
import generateCSSVariables from "../global-settings/components/GenerateRootCss";
import { updateGlobalStyle } from "../global-settings/fetch";
import { loadGoogleFont } from "../global-settings/helper";
import generateColorsVariables from "../global-settings/components/GenerateColorRoot";

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
	const [fontFamilies, setFontFamilies] = useState(template.fontFamilies);
	const [globalTypography, setGlobalTypography] = useState(template.globalTypographies);
    const [pages, setPages] = useState(template.pages);

    const { nonce, ajaxUrl } = window.frontisBlocksAdmin;

    const deviceType = useDeviceType();


    // Set global typography
    useEffect(() => {
        const updatedGlobalTypography = {};
      
        // Normal typography loop
        Object.keys(typography).forEach((item) => {
          const typo = typography[item];
          if (!typo) return;
      
          updatedGlobalTypography[item] = {
            ...(globalTypography[item] || {})
          };
      
          // fontSize
          if (typo.fontSize) {
            updatedGlobalTypography[item].fontSize = {
              variable: `--fb-global-${item}--font-size`,
              value: typo.fontSize,
              unit: typo.fontSizeUnit || {
                Desktop: "px",
                Tablet: "px",
                Mobile: "px"
              }
            };
          }
      
          // fontWeight
          if (typo.fontWeight) {
            updatedGlobalTypography[item].fontWeight = {
              variable: `--fb-global-${item}--font-weight`,
              value: typo.fontWeight
            };
          }
      
          // lineHeight
          if (typo.lineHeight) {
            updatedGlobalTypography[item].lineHeight = {
              variable: `--fb-global-${item}--line-height`,
              value: typo.lineHeight,
              unit: typo.lineHeightUnits || {
                Desktop: "px",
                Tablet: "px",
                Mobile: "px"
              }
            };
          }
      
          // letterSpacing
          if (typo.letterSpacing) {
            updatedGlobalTypography[item].letterSpacing = {
              variable: `--fb-global-${item}--letter-spacing`,
              value: typo.letterSpacing,
              unit: typo.letterSpacingUnit || {
                Desktop: "px",
                Tablet: "px",
                Mobile: "px"
              }
            };
          }
      
          // fontStyle
          if (typo.fontStyle) {
            updatedGlobalTypography[item].fontStyle = {
              variable: `--fb-global-${item}--font-style`,
              value: typo.fontStyle
            };
          }
      
          // textTransform
          if (typo.textTransform) {
            updatedGlobalTypography[item].textTransform = {
              variable: `--fb-global-${item}--text-transform`,
              value: typo.textTransform
            };
          }
      
          // textDecoration
          if (typo.textDecoration) {
            updatedGlobalTypography[item].textDecoration = {
              variable: `--fb-global-${item}--text-decoration`,
              value: typo.textDecoration
            };
          }
      
          // fontFamily ✅ (new)
          if (typo.fontFamily) {
            updatedGlobalTypography[item].fontFamily = {
              variable: `--fb-global-${item}--font-family`,
              value: typo.fontFamily
            };
          }
        });
      
        // Custom typography loop
        Object.keys(customTypography).forEach((item) => {
          const typo = customTypography[item];
          if (!typo) return;
      
          updatedGlobalTypography[item] = {
            ...(globalTypography[item] || {})
          };
      
          if (typo.fontSize) {
            updatedGlobalTypography[item].fontSize = {
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
            updatedGlobalTypography[item].fontWeight = {
              variable: `--fb-global-${item}--font-weight`,
              value: typo.fontWeight
            };
          }
      
          if (typo.lineHeight) {
            updatedGlobalTypography[item].lineHeight = {
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
            updatedGlobalTypography[item].letterSpacing = {
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
            updatedGlobalTypography[item].fontStyle = {
              variable: `--fb-global-${item}--font-style`,
              value: typo.fontStyle
            };
          }
      
          if (typo.textTransform) {
            updatedGlobalTypography[item].textTransform = {
              variable: `--fb-global-${item}--text-transform`,
              value: typo.textTransform
            };
          }
      
          if (typo.textDecoration) {
            updatedGlobalTypography[item].textDecoration = {
              variable: `--fb-global-${item}--text-decoration`,
              value: typo.textDecoration
            };
          }
      
          // fontFamily ✅ (new)
          if (typo.fontFamily) {
            updatedGlobalTypography[item].fontFamily = {
              variable: `--fb-global-${item}--font-family`,
              value: typo.fontFamily
            };
          }
        });
      
        setGlobalTypography(updatedGlobalTypography);
      }, [typography, customTypography]);
      

    console.log('globalTypography', globalTypography);


    const handleStorePages = async () => {
        for (const page of pages) {
          try {
            const pageData = new FormData();
            pageData.append("action", "fb_full_site_import");
            pageData.append("security", nonce);
            pageData.append("title", page.title);
            pageData.append("content", page.content);
      
            const response = await fetch(ajaxUrl, {
              method: "POST",
              body: pageData,
              credentials: "same-origin",
            });
      
            const result = await response.json();
      
            if (result.success) {
              console.log(`${page.title} created successfully`);
            } else {
              console.error(`Failed to create ${page.title}`, result.data);
            }
          } catch (error) {
            console.error(`Error creating ${page.title}:`, error);
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


    const handleImport = useCallback(async () => {
        setIsImporting(true);
        setImportProgress(0);
      
        const steps = [
          "Preparing import...",
          "Importing content...",
          "Setting up customizer...",
          "Configuring widgets...",
          "Creating pages...",
          "Finalizing setup...",
        ];
      
        try {
          for (let i = 0; i < steps.length; i++) {
            setCurrentStep(steps[i]);
            setImportProgress(((i + 1) / steps.length) * 100);
      
            if (steps[i] === "Creating pages...") {
              await handleStorePages();
            } else {
              await new Promise((resolve) => setTimeout(resolve, 1500));
            }
          }
      
          handleUpdateState();
          onClose();
        } catch (error) {
          console.error("Import failed:", error);
          // toast.error(__('Import failed. Please try again.', 'frontis-blocks'), {
          //     position: "top-right",
          //     autoClose: 3000,
          //     hideProgressBar: false,
          //     closeOnClick: true,
          //     pauseOnHover: true,
          //     draggable: true,
          // });
        } finally {
          setIsImporting(false);
          setImportProgress(0);
          setCurrentStep("");
        }
      }, [
        template?.id,
        formData,
        onClose,
        // globalColors,
        customColors,
        // gradientColors,
        customGradientColors,
        typography,
        customTypography,
        fontFamilies,
        globalTypography,
    ]);      



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