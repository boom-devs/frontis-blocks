<FB_Range
																min={0}
																max={500}
																label={__("Icon Gap", "frontis-blocks")}
																rangeValue={btnIconGap}
																onChangeHandler={(value) => setAttributes({ btnIconGap: value })}
																rangeUnitHandler={(value) => setAttributes({ btnIconGapUnits: value })}
																deviceType={deviceType}
																units={btnIconGapUnits}
																setAttributes={setAttributes}
																rangeStep={1}
																resetFallbackValue={""}
															/>