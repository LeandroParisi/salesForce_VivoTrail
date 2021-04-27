const relationships = {
  lookup: {
    basic: 'A lookup relationship essentially links two objects together so that you can “look up” one object from the related items on another object. Lookup relationships can be one-to-one or one-to-many.',
    detailed: `quando um registro está relacionado com outro registro através de um campo lookup, neste campo haverão duas opções:
    1º Permitir que o registro relacionado seja excluído e automaticamente limpar o valor do campo Lookup (default)
    2º Não permitir que o registro relacionado seja excluído, e assim, uma mensagem de erro será exibida.
    Pense no seguinte cenário: Dado que o RegistroA é mestre do RegistroB, por padrão, quando o RegistroA for deletado, automaticamente o RegistroB também será, pois não tem como um detalhe existir sem um mestre.
    No entanto, caso um registroC esteja relacionado ao RegistroB através de um campo lookup e a opção 2 esteja selecionada, ao tentar deletar o RegistroA dará o erro ;)`
  },
  master_detail: {
    basic: 'In this type of relationship, one object is the master and another is the detail. The master object controls certain behaviors of the detail object, like who can view the detail’s data. OBS.: when you create a master-details relationships from an object it will be details and the one you are pointing to is the master',
    detailed: `ele funciona como um ON CASCADE, mas não é somente isso!
    Um registro filho, por padrão, não pode ter seu registro pai alterado (para isso, é necessário a seleção de um checkbox no campo Master-Detail para permitir a reatribuição do pai).
    Outro fato importante é que pode-se haver somente três níveis de detalhes personalizado, ou seja:
    Objeto1 é mestre do Objeto2
    Objeto2 é mestre do Objeto3
    Objeto3 é mestre do Objeto4
    Além disso, um objeto padrão nunca poderá ser detalhe de um objeto customizado, por isso, não há a opção da seleção deste tipo de campo nestes objetos.
    Há mais algumas considerações importantes sobre estes relacionamentos. Encontrei um artigo no help salesforce bem legal que levanta todos os pontos: 
    https://help.salesforce.com/articleView?id=sf.relationships_considerations.htm&type=5 `,
    detailed2: `Quando você cria um campo Master-Detail em um objeto e aponta o relacionamento para outro, o objeto que você está criando o campo será o detalhe e o que você está apontando será o mestre.`
  },
  hierarchical: 'Hierarchical relationships are a special type of lookup relationship. The main difference between the two is that hierarchical relationships are only available on the User object.',

  OBS: 'Typically, you use lookup relationships when objects are only related in some cases. Sometimes a contact is associated with a specific account, but sometimes it’s just a contact. Objects in lookup relationships usually work as stand-alone objects and have their own tabs in the user interface. In a master-detail relationship, the detail object doesn’t work as a stand-alone. It’s highly dependent on the master. In fact, if a record on the master object is deleted, all its related detail records are deleted as well. When you’re creating master-detail relationships, you always create the relationship field on the detail object.',

  resources: {
    overview: 'https://help.salesforce.com/articleView?id=sf.overview_of_custom_object_relationships.htm&type=5',
    considerations: 'https://help.salesforce.com/articleView?id=sf.relationships_considerations.htm&type=5',
    schemaBuilder: 'https://help.salesforce.com/articleView?id=schema_builder.htm&language=en_US',
    schemaBuilder_customObjectsDefinition: 'https://help.salesforce.com/articleView?id=sf.schema_builder_elements_objects_ref.htm&type=5',
  }
}