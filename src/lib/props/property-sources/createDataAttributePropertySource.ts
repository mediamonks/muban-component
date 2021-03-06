import type { PropertySource } from '../getComponentProps';
import { convertSourceValue } from './convertSourceValue';

export function createDataAttributePropertySource(): PropertySource {
  return () => ({
    sourceName: 'data',
    hasProp: (propInfo) =>
      Boolean(
        propInfo.source.target &&
          propInfo.type !== Function &&
          propInfo.source.name in propInfo.source.target.dataset,
      ),
    getProp: (propInfo) => {
      let value =
        propInfo.type !== Function
          ? propInfo.source.target!.dataset[propInfo.source.name] ?? undefined
          : undefined;

      if (value !== undefined) {
        value = convertSourceValue(propInfo, value);
      } else {
        if (propInfo.type === Boolean) {
          console.warn();
        }
      }
      return value;
    },
  });
}
