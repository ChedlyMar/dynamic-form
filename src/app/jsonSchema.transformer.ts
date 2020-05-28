export function jsonSchemaTransform(fields) {
    const schema = fields[0];
  
    fields.length = 0;
    Object.keys(schema.properties).forEach(key => {
      const { type, ...templateOptions} = schema.properties[key];
      fields.push({
        key,
        type,
        templateOptions,
      });
    });
  
    return fields;
  }