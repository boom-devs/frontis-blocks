import { useEffect, useState, useRef } from '@wordpress/element';
import { select } from '@wordpress/data';
import { applyFilters } from '@wordpress/hooks';
import { __ } from '@wordpress/i18n';
import Range from '@Components/range/Range.js';
import { useDeviceType } from '@Controls/getPreviewType';
import { getIdFromString, getPanelIdFromRef } from '@Utils/Helpers';

const ResponsiveSlider = (props) => {
  const {
    label,
    data,
    min,
    max,
    unit,
    units,
    setAttributes,
  } = props;

  const [panelNameForHook, setPanelNameForHook] = useState(null);
  const panelRef = useRef(null);
  const deviceType = useDeviceType();
  const { getSelectedBlock } = select('core/block-editor');
  const blockNameForHook = getSelectedBlock()?.name.split('/').pop();

  useEffect(() => {
    setPanelNameForHook(getPanelIdFromRef(panelRef));
  }, [blockNameForHook]);

  const createRangeComponent = (device) => {
    return (
      <Range
        label={device === 'desktop' ? label : ''}
        value={data[device].value}
        onChange={(value) => {
          setAttributes({ [data[device].label]: value });
        }}
        min={min}
        max={max}
        unit={unit.value}
        data={{
          value: data[device].value,
          label: data[device].label,
        }}
        responsive={true}
        units={units}
      />
    );
  };

  const output = {
    Desktop: createRangeComponent('desktop'),
    Tablet: createRangeComponent('tablet'),
    Mobile: createRangeComponent('mobile'),
  };

  const controlName = getIdFromString(label);
  const controlBeforeDomElement = applyFilters(
    `frontis.${blockNameForHook}.${panelNameForHook}.${controlName}.before`,
    '',
    blockNameForHook
  );
  const controlAfterDomElement = applyFilters(
    `frontis.${blockNameForHook}.${panelNameForHook}.${controlName}`,
    '',
    blockNameForHook
  );

  return (
    <div ref={panelRef} className="components-base-control">
      {controlBeforeDomElement}
      <div className="fb-responsive-range">
        <div className="fb-responsive-control-inner">
          {output[deviceType] || output.Desktop}
        </div>
      </div>
      {controlAfterDomElement}
    </div>
  );
};

export default ResponsiveSlider;