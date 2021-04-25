const salesForceDataModel = {
  tables: 'objects',
  columns: 'fields',
  rows: 'records',
},

const objectTypes = {
  standardObjects: 'Common business objects like Account, Contact, Lead, and Opportunity are all standard objects.',
  customObjects: 'objects that you create to store information that’s specific to your company or industry.',
  externalObjects: null,
  platformEvents: null,
  BigObjects: null,

  OBS: 'when you create a custom object, the platform automatically builds things like the page layout for the user interface.'
}

const fieldTypes = {
  Identity: 'A 15-character, case-sensitive field that’s automatically generated for every record. You can find a record’s ID in its URL.',
  System: 'Read-only fields that provide information about a record from the system, like when the record was created or when it was last changed.',
  Name: 'All records need names so you can distinguish between them. You can use text names or auto-numbered names that automatically increment every time you create a record.',
  Custom: 'Fields you create on standard or custom objects are called custom fields.',

  OBS: '“__c” after field name indicates a custom field'
}

const dataTypes = {
  Checkbox: 'yes / no tooggle',
  DateTime: 'dates',
  Formula: 'like a formula in a excel, you write the formula, but the value of the field is the result of this formula',
}