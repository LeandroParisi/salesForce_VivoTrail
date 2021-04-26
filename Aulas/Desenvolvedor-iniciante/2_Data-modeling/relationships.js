const relationships = {
  lookup: 'A lookup relationship essentially links two objects together so that you can “look up” one object from the related items on another object. Lookup relationships can be one-to-one or one-to-many.',
  master_detail: 'In this type of relationship, one object is the master and another is the detail. The master object controls certain behaviors of the detail object, like who can view the detail’s data. OBS.: when you create a master-details relationships from an object it will be details and the one you are pointing to is the master',
  hierarchical: 'Hierarchical relationships are a special type of lookup relationship. The main difference between the two is that hierarchical relationships are only available on the User object.',

  OBS: 'Typically, you use lookup relationships when objects are only related in some cases. Sometimes a contact is associated with a specific account, but sometimes it’s just a contact. Objects in lookup relationships usually work as stand-alone objects and have their own tabs in the user interface. In a master-detail relationship, the detail object doesn’t work as a stand-alone. It’s highly dependent on the master. In fact, if a record on the master object is deleted, all its related detail records are deleted as well. When you’re creating master-detail relationships, you always create the relationship field on the detail object.',

  resources: {
    overview: 'https://help.salesforce.com/articleView?id=sf.overview_of_custom_object_relationships.htm&type=5',
    considerations: 'https://help.salesforce.com/articleView?id=sf.relationships_considerations.htm&type=5',
    schemaBuilder: 'https://help.salesforce.com/articleView?id=schema_builder.htm&language=en_US',
    schemaBuilder_customObjectsDefinition: 'https://help.salesforce.com/articleView?id=sf.schema_builder_elements_objects_ref.htm&type=5',
  }
}