const clientes = [{
        nome: "André",
        cpf: "12312312312",
        dependentes: [{
                nome: "Sara",
                parentesco: "filha",
                dataNasc: "20/03/2011",
            },
            {
                nome: "Samia",
                parentesco: "filha",
                dataNasc: "04/01/2014",
            },
        ],
    },
    {
        nome: "Juliana",
        cpf: "56767867867",
        dependentes: [{
            nome: "Sophia",
            parentesco: "filha",
            dataNasc: "30/08/2020",
        }, ],
    },
    {
        nome: "asdfasf",
        cpf: "56767867867",
        dependentes: [{
            nome: "S21312312",
            parentesco: "filha",
            dataNasc: "30/08/2020",
        }, ],
    },
    {
        nome: "Jurturtu",
        cpf: "56767867867",
        dependentes: [{
            nome: "Sophia",
            parentesco: "filha",
            dataNasc: "30/08/2020",
        }, ],
    },
    {
        nome: "Julifdghdfg",
        cpf: "56767867867",
        dependentes: [{
            nome: "Sophia",
            parentesco: "filha",
            dataNasc: "30/08/2020",
        }, ],
    },
];

console.log(clientes[0].dependentes.length);

var listaDependentes = [
    ...clientes[0].dependentes,
    ...clientes[1].dependentes,
];

console.table(listaDependentes);