# AuraInformacoesContas

Este repositório contém um exemplo de código Apex e Aura Component que trabalham juntos para exibir informações sobre contas do Salesforce em uma lista com seções expansíveis.

## Classe Apex
A classe Apex InformacoesContas contém um método estático que retorna uma lista de contas do Salesforce, ordenada por um campo específico. O método é acessível por meio de chamadas remotas (Remote Action) usando a anotação @AuraEnabled.

## Componente Aura
O componente Aura ListaContasAccordion exibe a lista de contas retornada pelo método na classe Apex em um card com seções expansíveis. O componente é implementado em uma página Lightning no Salesforce e pode ser usado em várias situações.

## Atributos
O componente tem dois atributos:

**listaContas (Account[])** - Armazena a lista de contas recuperada da classe Apex.
**orderBy (String)** - Define o campo de ordenação das contas.

## Eventos
O componente tem um evento:

**init** - Evento que é acionado quando o componente é inicializado e chama o método estático na classe Apex para recuperar a lista de contas.

## Controlador
O controlador do componente é escrito em JavaScript e é responsável por chamar o método remoto na classe Apex para recuperar a lista de contas. O controlador é executado quando o componente é inicializado e é definido como a ação do evento init.

## Como usar
Para usar este componente em sua organização Salesforce:

1 - Clone ou faça o download deste repositório.

2 - Crie uma nova página Lightning no Salesforce.

3 - Adicione o componente Aura ListaContasAccordion à página.

4 - Salve a página e visualize a lista de contas com seções expansíveis.

Este exemplo de código é fornecido como uma demonstração e pode ser adaptado para atender às suas necessidades específicas. Consulte a documentação do Salesforce para obter mais informações sobre desenvolvimento com Apex e Aura Components.

# Lista de Exercício: Aura - A revolta dos componentes I
Exercícios que foram atendidos 2, 2.A e 2.B.

2 - Durante uma reunião da Mamaco corp, foi identificado uma dificuldade por parte da Diretoria em identificar uma lista de contas presentes na org que mostre as principais informações do cliente.

2.A - Para melhorar a visualização ajuste a lista em ordem por Nome ou data de criação.

//2.B - Realiza a criação da tarefa acima utilizando componente Lightning Accordion.
