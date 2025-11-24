<FB_Range
						min={1}
						max={200}
						label={__("Gap", "frontis-blocks")}
						rangeValue={breadcrumbItemGap}
						onChangeHandler={(value) => setAttributes({ breadcrumbItemGap: value })}
						rangeUnitHandler={(value) => setAttributes({ breadcrumbItemGapUnits: value })}
						deviceType={deviceType}
						units={breadcrumbItemGapUnits}
						setAttributes={setAttributes}
						rangeStep={1}
						resetFallbackValue={""}
					/>