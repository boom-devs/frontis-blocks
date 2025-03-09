import { __ } from '@wordpress/i18n';
import {
  useBlockProps,
  InspectorControls,
} from '@wordpress/block-editor';
import {
  PanelBody,
  TabPanel,
  SelectControl,
  RangeControl,
  ToggleControl,
  TextControl,
  ColorPicker,
  BaseControl,
  Button,
  ButtonGroup,
} from '@wordpress/components';
import { useEffect, useState, useMemo } from '@wordpress/element';
import { useSelect } from '@wordpress/data';
import {
  T_TYPES,
  P_TYPES,
  SORT_OPTIONS,
  PAGINATION_TYPES,
  DEFAULT_COLUMNS,
  CARD_ELEMENTS
} from "./constants/constants";
import { useDeviceType } from "@Config/displayType";
import './editor.scss';

export default function Inspector({ attributes, setAttributes, clientId }) {
  const {
    blockID,
    templateType,
    postTypes,
    itemsPerPage,
    columns,
    gap,
    sortBy,
    taxonomyFilter,
    filterTerms,
    showPagination,
    cardElements,
    imageSize,
    excerptLength,
    metaElements,
    buttonText,
    cardStyle,
    titleStyle,
    imageStyle,
    buttonStyle
  } = attributes;

  const deviceType = useDeviceType();
  
  // Get available taxonomies based on selected post type
  const taxonomies = useSelect((select) => {
    const { getTaxonomies } = select('core');
    const allTaxonomies = getTaxonomies({ per_page: -1 }) || [];
    return allTaxonomies.filter(tax => 
      tax.types.includes(postTypes) && tax.visibility?.show_ui
    );
  }, [postTypes]);
  
  // Get available terms for selected taxonomy
  const terms = useSelect((select) => {
    if (!taxonomyFilter) return [];
    const { getEntityRecords } = select('core');
    return getEntityRecords('taxonomy', taxonomyFilter, { per_page: -1 }) || [];
  }, [taxonomyFilter]);
  
  // Get available image sizes
  const imageSizes = useSelect((select) => {
    const { getSettings } = select('core/block-editor');
    const settings = getSettings();
    return settings?.imageSizes || [];
  }, []);
  
  // Handle template type change
  const handleTemplateTypeChange = (value) => {
    setAttributes({ templateType: value });
    
    // Set default columns based on template type
    if (value === 'list') {
      setAttributes({ 
        columns: {
          desktop: 1,
          tablet: 1,
          mobile: 1
        }
      });
    }
  };
  
  // Handle post type change
  const handlePostTypeChange = (value) => {
    setAttributes({ 
      postTypes: value,
      taxonomyFilter: '',
      filterTerms: []
    });
  };
  
  // Handle card element toggle
  const handleCardElementToggle = (element) => {
    setAttributes({
      cardElements: {
        ...cardElements,
        [element]: !cardElements[element]
      }
    });
  };
  
  // Handle meta element toggle
  const handleMetaElementToggle = (element) => {
    setAttributes({
      metaElements: {
        ...metaElements,
        [element]: !metaElements[element]
      }
    });
  };

  return (
    <>
      <style>
        {`.${blockID} {
            /* Dynamic CSS will be added here */
          }`}
      </style>
      <InspectorControls key="controls">
        <div className="fb-inspector-control">
          <TabPanel
            className="fb-parent-tab-panel"
            activeClass="active-tab"
            tabs={[
              {
                name: "general",
                title: "General",
                className: "fb-tab general",
              },
              {
                name: "styles",
                title: "Style",
                className: "fb-tab styles",
              },
              {
                name: "advanced",
                title: "Advanced",
                className: "fb-tab advance",
              },
            ]}
          >
            {(tab) => (
              <div className={"fb-tab-controls " + tab.name}>
                {tab.name === 'general' && (
                  <>
                    <PanelBody title={__("Template", "frontis-blocks")} initialOpen={true}>
                      <SelectControl
                        label={__("Template Type", "frontis-blocks")}
                        value={templateType}
                        options={T_TYPES}
                        onChange={handleTemplateTypeChange}
                      />
                      
                      <RangeControl
                        label={__("Items per page", "frontis-blocks")}
                        value={itemsPerPage}
                        onChange={(value) => setAttributes({ itemsPerPage: value })}
                        min={1}
                        max={50}
                        allowReset
                        resetFallbackValue={6}
                      />
                      
                      <SelectControl
                        label={__("Pagination", "frontis-blocks")}
                        value={showPagination}
                        options={PAGINATION_TYPES}
                        onChange={(value) => setAttributes({ showPagination: value })}
                      />
                    </PanelBody>
                    
                    <PanelBody title={__("Card Elements", "frontis-blocks")} initialOpen={false}>
                      {CARD_ELEMENTS.map(element => (
                        <ToggleControl
                          key={element.value}
                          label={element.label}
                          checked={cardElements[element.value]}
                          onChange={() => handleCardElementToggle(element.value)}
                        />
                      ))}
                      
                      {cardElements.image && (
                        <SelectControl
                          label={__("Image Size", "frontis-blocks")}
                          value={imageSize}
                          options={imageSizes.map(size => ({ 
                            label: size.name, 
                            value: size.slug 
                          }))}
                          onChange={(value) => setAttributes({ imageSize: value })}
                        />
                      )}
                      
                      {cardElements.excerpt && (
                        <RangeControl
                          label={__("Excerpt Length", "frontis-blocks")}
                          value={excerptLength}
                          onChange={(value) => setAttributes({ excerptLength: value })}
                          min={5}
                          max={100}
                          allowReset
                          resetFallbackValue={25}
                        />
                      )}
                      
                      {cardElements.meta && (
                        <PanelBody title={__("Meta Information", "frontis-blocks")} initialOpen={false}>
                          <ToggleControl
                            label={__("Show Author", "frontis-blocks")}
                            checked={metaElements.author}
                            onChange={() => handleMetaElementToggle('author')}
                          />
                          <ToggleControl
                            label={__("Show Date", "frontis-blocks")}
                            checked={metaElements.date}
                            onChange={() => handleMetaElementToggle('date')}
                          />
                          <ToggleControl
                            label={__("Show Comments", "frontis-blocks")}
                            checked={metaElements.comments}
                            onChange={() => handleMetaElementToggle('comments')}
                          />
                          <ToggleControl
                            label={__("Show Categories", "frontis-blocks")}
                            checked={metaElements.categories}
                            onChange={() => handleMetaElementToggle('categories')}
                          />
                        </PanelBody>
                      )}
                      
                      {cardElements.button && (
                        <TextControl
                          label={__("Button Text", "frontis-blocks")}
                          value={buttonText}
                          onChange={(value) => setAttributes({ buttonText: value })}
                        />
                      )}
                    </PanelBody>
					<PanelBody title={__("Query Settings", "frontis-blocks")} initialOpen={true}>
                      <SelectControl
                        label={__("Post Type", "frontis-blocks")}
                        value={postTypes}
                        options={P_TYPES}
                        onChange={handlePostTypeChange}
                      />
                      
                      <SelectControl
                        label={__("Sort By", "frontis-blocks")}
                        value={sortBy}
                        options={SORT_OPTIONS}
                        onChange={(value) => setAttributes({ sortBy: value })}
                      />
                      
                      {taxonomies?.length > 0 && (
                        <>
                          <SelectControl
                            label={__("Filter By Taxonomy", "frontis-blocks")}
                            value={taxonomyFilter}
                            options={[
                              { label: __("None", "frontis-blocks"), value: "" },
                              ...taxonomies.map(tax => ({ 
                                label: tax.name, 
                                value: tax.slug 
                              }))
                            ]}
                            onChange={(value) => setAttributes({ 
                              taxonomyFilter: value,
                              filterTerms: []
                            })}
                          />
                          
                          {taxonomyFilter && terms?.length > 0 && (
                            <SelectControl
                              label={__("Select Terms", "frontis-blocks")}
                              value={filterTerms}
                              multiple
                              options={terms.map(term => ({ 
                                label: term.name, 
                                value: term.id.toString() 
                              }))}
                              onChange={(value) => setAttributes({ filterTerms: value })}
                            />
                          )}
                        </>
                      )}
                    </PanelBody>
					<PanelBody title={__("Grid Layout", "frontis-blocks")} initialOpen={true}>
                      {templateType !== 'list' && (
                        <>
                          <BaseControl label={__("Columns", "frontis-blocks")}>
                            <ButtonGroup>
                              <Button 
                                isPrimary={deviceType === 'desktop'} 
                                isSecondary={deviceType !== 'desktop'}
                                onClick={() => {}}>
                                {__("Desktop", "frontis-blocks")}
                              </Button>
                              <Button 
                                isPrimary={deviceType === 'tablet'} 
                                isSecondary={deviceType !== 'tablet'}
                                onClick={() => {}}>
                                {__("Tablet", "frontis-blocks")}
                              </Button>
                              <Button 
                                isPrimary={deviceType === 'mobile'} 
                                isSecondary={deviceType !== 'mobile'}
                                onClick={() => {}}>
                                {__("Mobile", "frontis-blocks")}
                              </Button>
                            </ButtonGroup>
                            
                            <RangeControl
                              value={columns[deviceType]}
                              onChange={(value) => setAttributes({ 
                                columns: {
                                  ...columns,
                                  [deviceType]: value
                                }
                              })}
                              min={1}
                              max={deviceType === 'desktop' ? 6 : (deviceType === 'tablet' ? 4 : 2)}
                              allowReset
                              resetFallbackValue={DEFAULT_COLUMNS[deviceType]}
                            />
                          </BaseControl>
                        </>
                      )}
                      
                      <BaseControl label={__("Gap", "frontis-blocks")}>
                        <ButtonGroup>
                          <Button 
                            isPrimary={deviceType === 'desktop'} 
                            isSecondary={deviceType !== 'desktop'}
                            onClick={() => {}}>
                            {__("Desktop", "frontis-blocks")}
                          </Button>
                          <Button 
                            isPrimary={deviceType === 'tablet'} 
                            isSecondary={deviceType !== 'tablet'}
                            onClick={() => {}}>
                            {__("Tablet", "frontis-blocks")}
                          </Button>
                          <Button 
                            isPrimary={deviceType === 'mobile'} 
                            isSecondary={deviceType !== 'mobile'}
                            onClick={() => {}}>
                            {__("Mobile", "frontis-blocks")}
                          </Button>
                        </ButtonGroup>
                        
                        <RangeControl
                          value={gap[deviceType]}
                          onChange={(value) => setAttributes({ 
                            gap: {
                              ...gap,
                              [deviceType]: value
                            }
                          })}
                          min={0}
                          max={100}
                          allowReset
                          resetFallbackValue={20}
                        />
                      </BaseControl>
                    </PanelBody>
                  </>
                )}
                
                {tab.name === "styles" && (
                  <>
                    <PanelBody title={__("Card Styling", "frontis-blocks")} initialOpen={true}>
                      <BaseControl label={__("Background Color", "frontis-blocks")}>
                        <ColorPicker
                          color={cardStyle.backgroundColor}
                          onChange={(color) => setAttributes({
                            cardStyle: {
                              ...cardStyle,
                              backgroundColor: color
                            }
                          })}
                          disableAlpha
                        />
                      </BaseControl>
                      
                      <RangeControl
                        label={__("Border Radius", "frontis-blocks")}
                        value={cardStyle.borderRadius}
                        onChange={(value) => setAttributes({
                          cardStyle: {
                            ...cardStyle,
                            borderRadius: value
                          }
                        })}
                        min={0}
                        max={50}
                        allowReset
                        resetFallbackValue={5}
                      />
                      
                      <RangeControl
                        label={__("Padding", "frontis-blocks")}
                        value={cardStyle.padding}
                        onChange={(value) => setAttributes({
                          cardStyle: {
                            ...cardStyle,
                            padding: value
                          }
                        })}
                        min={0}
                        max={50}
                        allowReset
                        resetFallbackValue={20}
                      />
                      
                      <ToggleControl
                        label={__("Box Shadow", "frontis-blocks")}
                        checked={cardStyle.boxShadow}
                        onChange={(value) => setAttributes({
                          cardStyle: {
                            ...cardStyle,
                            boxShadow: value
                          }
                        })}
                      />
                    </PanelBody>
                    
                    {cardElements.title && (
                      <PanelBody title={__("Title Styling", "frontis-blocks")} initialOpen={false}>
                        <BaseControl label={__("Color", "frontis-blocks")}>
                          <ColorPicker
                            color={titleStyle.color}
                            onChange={(color) => setAttributes({
                              titleStyle: {
                                ...titleStyle,
                                color: color
                              }
                            })}
                            disableAlpha
                          />
                        </BaseControl>
                        
                        <BaseControl label={__("Font Size", "frontis-blocks")}>
                          <ButtonGroup>
                            <Button 
                              isPrimary={deviceType === 'desktop'} 
                              isSecondary={deviceType !== 'desktop'}
                              onClick={() => {}}>
                              {__("Desktop", "frontis-blocks")}
                            </Button>
                            <Button 
                              isPrimary={deviceType === 'tablet'} 
                              isSecondary={deviceType !== 'tablet'}
                              onClick={() => {}}>
                              {__("Tablet", "frontis-blocks")}
                            </Button>
                            <Button 
                              isPrimary={deviceType === 'mobile'} 
                              isSecondary={deviceType !== 'mobile'}
                              onClick={() => {}}>
                              {__("Mobile", "frontis-blocks")}
                            </Button>
                          </ButtonGroup>
                          
                          <RangeControl
                            value={titleStyle.fontSize[deviceType]}
                            onChange={(value) => setAttributes({
                              titleStyle: {
                                ...titleStyle,
                                fontSize: {
                                  ...titleStyle.fontSize,
                                  [deviceType]: value
                                }
                              }
                            })}
                            min={10}
                            max={50}
                            allowReset
                            resetFallbackValue={deviceType === 'desktop' ? 20 : (deviceType === 'tablet' ? 18 : 16)}
                          />
                        </BaseControl>
                        
                        <RangeControl
                          label={__("Margin Bottom", "frontis-blocks")}
                          value={titleStyle.marginBottom}
                          onChange={(value) => setAttributes({
                            titleStyle: {
                              ...titleStyle,
                              marginBottom: value
                            }
                          })}
                          min={0}
                          max={50}
                          allowReset
                          resetFallbackValue={10}
                        />
                      </PanelBody>
                    )}
                    
                    {cardElements.image && (
                      <PanelBody title={__("Image Styling", "frontis-blocks")} initialOpen={false}>
                        <RangeControl
                          label={__("Border Radius", "frontis-blocks")}
                          value={imageStyle.borderRadius}
                          onChange={(value) => setAttributes({
                            imageStyle: {
                              ...imageStyle,
                              borderRadius: value
                            }
                          })}
                          min={0}
                          max={50}
                          allowReset
                          resetFallbackValue={5}
                        />
                        
                        <RangeControl
                          label={__("Margin Bottom", "frontis-blocks")}
                          value={imageStyle.marginBottom}
                          onChange={(value) => setAttributes({
                            imageStyle: {
                              ...imageStyle,
                              marginBottom: value
                            }
                          })}
                          min={0}
                          max={50}
                          allowReset
                          resetFallbackValue={15}
                        />
                      </PanelBody>
                    )}
                    
                    {cardElements.button && (
                      <PanelBody title={__("Button Styling", "frontis-blocks")} initialOpen={false}>
                        <BaseControl label={__("Background Color", "frontis-blocks")}>
                          <ColorPicker
                            color={buttonStyle.backgroundColor}
                            onChange={(color) => setAttributes({
                              buttonStyle: {
                                ...buttonStyle,
                                backgroundColor: color
                              }
                            })}
                            disableAlpha
                          />
                        </BaseControl>
                        
                        <BaseControl label={__("Text Color", "frontis-blocks")}>
                          <ColorPicker
                            color={buttonStyle.textColor}
                            onChange={(color) => setAttributes({
                              buttonStyle: {
                                ...buttonStyle,
                                textColor: color
                              }
                            })}
                            disableAlpha
                          />
                        </BaseControl>
                        
                        <RangeControl
                          label={__("Border Radius", "frontis-blocks")}
                          value={buttonStyle.borderRadius}
                          onChange={(value) => setAttributes({
                            buttonStyle: {
                              ...buttonStyle,
                              borderRadius: value
                            }
                          })}
                          min={0}
                          max={50}
                          allowReset
                          resetFallbackValue={4}
                        />
                        
                        <RangeControl
                          label={__("Vertical Padding", "frontis-blocks")}
                          value={buttonStyle.padding.vertical}
                          onChange={(value) => setAttributes({
                            buttonStyle: {
                              ...buttonStyle,
                              padding: {
                                ...buttonStyle.padding,
                                vertical: value
                              }
                            }
                          })}
                          min={0}
                          max={50}
                          allowReset
                          resetFallbackValue={8}
                        />
                        
                        <RangeControl
                          label={__("Horizontal Padding", "frontis-blocks")}
                          value={buttonStyle.padding.horizontal}
                          onChange={(value) => setAttributes({
                            buttonStyle: {
                              ...buttonStyle,
                              padding: {
                                ...buttonStyle.padding,
                                horizontal: value
                              }
                            }
                          })}
                          min={0}
                          max={50}
                          allowReset
                          resetFallbackValue={16}
                        />
                      </PanelBody>
                    )}
                  </>
                )}
                
                {tab.name === "advanced" && (
                  <>
                    <PanelBody title={__("Advanced Settings", "frontis-blocks")} initialOpen={true}>
                      <TextControl
                        label={__("Block ID", "frontis-blocks")}
                        value={blockID}
                        onChange={(value) => setAttributes({ blockID: value })}
                        help={__("Add a custom CSS ID to this block", "frontis-blocks")}
                      />
                    </PanelBody>
                  </>
                )}
              </div>
            )}
          </TabPanel>
        </div>
      </InspectorControls>
    </>
  );
}