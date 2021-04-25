const methods = {
  dataImportWizard: {
    motive1: 'you need to load less than 50,000 records.',
    motive2: 'The objects you need to import are supported by the wizard.',
    motive3: 'You don’t need the import process to be automated.',
  },
  dataLoader: {
    motive1: 'You need to load 50,000 to five million records. If you need to load more than 5 million records, we recommend you work with a Salesforce partner or visit the AppExchange for a suitable partner product.',
    motive2: 'You need to load into an object that is not supported by the Data Import Wizard',
    motive3: 'You want to schedule regular data loads, such as nightly imports.',
  },
  resources: {
    importMaping: 'https://help.salesforce.com/articleView?id=sf.field_mapping_for_other_data_sources_and_organization_import.htm&type=5',
    dataLoaderOnLinux: 'https://www.metamorphant.de/blog/posts/2019-12-06-salesforce-dataloader-linux/',
    playlist: 'https://salesforce.vidyard.com/watch/ARIjWm2qrDkJVJxEhReFug?_ga=2.27082106.617347083.1619298795-1593555678.1619298795',
  }
};

const importSteps = {
  cleanUp: ['delete duplicates', 'correct spelling', 'enforce name conventions', 'fill in missing data'],
  prepareImportFile: ['match field names', 'add columns for record owner', 'column for the parent record'],
  prepareSalesForce: ['create custom fields', 'add picklist values', 'create external IDs'],
}

const importRules = `This information can help you integrate your imported data into Salesforce.
New Values for Picklists and Multi-Select Picklists—If you import a picklist value that doesn’t match an existing picklist value:
For an unrestricted picklist, the Data Import Wizard uses the value that’s in the import file.
For a restricted picklist, the Data Import Wizard uses the picklist’s default value.
Multi-Select Picklists—To import multiple values into a multi-select picklist, separate the values by a semicolon in your import file.
Checkboxes—To import data into a checkbox field, use 1 for checked values and 0 for unchecked values.
Default Values—For picklist, multi-select picklist, and checkbox fields, if you do not map the field in the import wizard, the default value for the field, if any, is automatically inserted into the new or updated record.
Date/Time Fields—Ensure that the format of any date/time fields you are importing matches how they display in Salesforce per your locale setting.
Formula Fields—Formula fields cannot accept imported data because they are read-only.
Field Validation Rules—Salesforce runs validation rules on records before they are imported. Records that fail validation aren’t imported. Consider deactivating the appro`