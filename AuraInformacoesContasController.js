({
    // Função que é executada quando o componente é inicializado
    doInit: function(component, event, helper) {
        // Recupera a ação do controlador que retorna a lista de contas
        var action = component.get("c.getAccounts");
        // Recupera a ordem atual de ordenação das contas
        var ordem = component.get("v.orderBy");
        // Define os parâmetros da ação
        action.setParams({ orderBy : component.get("v.orderBy") });
        // Define o callback que será executado quando a resposta da ação for recebida
        action.setCallback(this, function(response) {
            // Recupera o estado da resposta
            var state = response.getState();
            // Se o estado for "SUCCESS" (sucesso)
            if (state === "SUCCESS") {
                // Recupera a lista de contas da resposta
                var contas = response.getReturnValue();
                // Define a lista de contas no componente
                component.set("v.listaContas", response.getReturnValue());
            }
        });
        // Enfileira a ação para ser executada
        $A.enqueueAction(action);
    }
})
