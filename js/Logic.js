class Logic {

    constructor() {

        /*****************************************************************************************************/
        /*****************************************************************************************************/
        /**************************************APOSTADORES****************************************************/
        /*****************************************************************************************************/
        /*****************************************************************************************************/

        // array para cadastrar os apostadores e seus respectivos números 
        // cria também a chave pontos no array
        this.apostadores = [

            {
                'nome': "Joelma", 'n1': 3, 'n2': 7, 'n3': 13, 'n4': 21, 'n5': 31,
                'n6': 44, 'n7': 51, 'n8': 66, 'n9': 77, 'n10': 80, 'pontos': ''
            },
            //***********************************************************************/
            {
                'nome': "Edvaldo", 'n1': 7, 'n2': 11, 'n3': 32, 'n4': 38, 'n5': 40,
                'n6': 43, 'n7': 48, 'n8': 54, 'n9': 60, 'n10': 70, 'pontos': ''
            },
            //***********************************************************************/
            {
                'nome': "Davih", 'n1': 5, 'n2': 8, 'n3': 15, 'n4': 17, 'n5': 20,
                'n6': 29, 'n7': 47, 'n8': 70, 'n9': 79, 'n10': 80, 'pontos': ''
            },
            //***********************************************************************/
            {
                'nome': "Lu", 'n1': 3, 'n2': 6, 'n3': 9, 'n4': 22, 'n5': 35,
                'n6': 43, 'n7': 48, 'n8': 54, 'n9': 62, 'n10': 78, 'pontos': ''
            },
            //***********************************************************************/
            {
                'nome': "Gabriel", 'n1': 1, 'n2': 2, 'n3': 7, 'n4': 14, 'n5': 22,
                'n6': 31, 'n7': 40, 'n8': 54, 'n9': 60, 'n10': 72, 'pontos': ''
            },
            //***********************************************************************/
            {
                'nome': "Dayane", 'n1': 3, 'n2': 5, 'n3': 7, 'n4': 11, 'n5': 17,
                'n6': 21, 'n7': 27, 'n8': 31, 'n9': 63, 'n10': 80, 'pontos': ''
            },
            //***********************************************************************/

            {
                'nome': "Luciano", 'n1': 1, 'n2': 5, 'n3': 7, 'n4': 8, 'n5': 18,
                'n6': 25, 'n7': 38, 'n8': 49, 'n9': 56, 'n10': 78, 'pontos': ''
            },
            //***********************************************************************/

            {
                'nome': "Edson", 'n1': 5, 'n2': 7, 'n3': 9, 'n4': 11, 'n5': 17,
                'n6': 19, 'n7': 32, 'n8': 40, 'n9': 60, 'n10': 48, 'pontos': ''
            },
            //***********************************************************************/

            {
                'nome': "Laís", 'n1': 6, 'n2': 80, 'n3': 45, 'n4': 36, 'n5': 24,
                'n6': 67, 'n7': 38, 'n8': 51, 'n9': 19, 'n10': 73, 'pontos': ''
            },
            //***********************************************************************/

            {
                'nome': "Diogo", 'n1': 1, 'n2': 3, 'n3': 7, 'n4': 11, 'n5': 45,
                'n6': 46, 'n7': 55, 'n8': 66, 'n9': 79, 'n10': 80, 'pontos': ''
            },
            //***********************************************************************/

            {
                'nome': "Geraldo", 'n1': 4, 'n2': 9, 'n3': 10, 'n4': 19, 'n5': 27,
                'n6': 36, 'n7': 42, 'n8': 43, 'n9': 49, 'n10': 63, 'pontos': ''
            },
            //***********************************************************************/

            {
                'nome': "Dona Maria", 'n1': 1, 'n2': 4, 'n3': 5, 'n4': 6, 'n5': 10,
                'n6': 11, 'n7': 14, 'n8': 19, 'n9': 61, 'n10': 77, 'pontos': ''
            },
            //***********************************************************************/

            {
                'nome': "Maria Beatriz", 'n1': 10, 'n2': 37, 'n3': 39, 'n4': 40, 'n5': 45,
                'n6': 58, 'n7': 59, 'n8': 72, 'n9': 77, 'n10': 78, 'pontos': ''
            },
            //***********************************************************************/

            {
                'nome': "Alessandra", 'n1': 2, 'n2': 3, 'n3': 9, 'n4': 11, 'n5': 12,
                'n6': 21, 'n7': 25, 'n8': 37, 'n9': 58, 'n10': 75, 'pontos': ''
            },
            //***********************************************************************/


        ];


        /*****************************************************************************************************/
        /*****************************************************************************************************/
        /****************************************CONCURSOS****************************************************/
        /*****************************************************************************************************/
        /*****************************************************************************************************/
        // array para cada concurso
        this.concurso = [
            { 'data': "05/05/2020", 'concNum': 5261, 'n1': 2, 'n2': 20, 'n3': 27, 'n4': 31, 'n5': 53 },

            { 'data': "06/05/2020", 'concNum': 5262, 'n1': 20, 'n2': 24, 'n3': 60, 'n4': 66, 'n5': 69 },

            { 'data': "07/05/2020", 'concNum': 5263, 'n1': 4, 'n2': 12, 'n3': 26, 'n4': 79, 'n5': 80 },

            { 'data': "08/05/2020", 'concNum': 5264, 'n1': 3, 'n2': 10, 'n3': 22, 'n4': 38, 'n5': 45 },

            



        ];
        /*****************************************************************************************************/
        /*****************************************************************************************************/
        /****************************************CONCURSOS****************************************************/
        /*****************************************************************************************************/
        /*****************************************************************************************************/

        // id de onde aparece a data atual
        this.dt = document.getElementById("data");
        // cria objeto date
        this.currentDate = new Date();
        // parametro para formato da data
        this.locale = "pt-BR";
        // formata a data atual e atribui a atribui a today
        this.today = '';

        // array armazena apenas os números da cada apostador
        // array será incrementado na função numbersOfBettors()
        this.numbers = {};

        // array armazena apenas os números dos concursos
        // array será incrementado na função numbersDrawn()
        this.contests = [];

        // array armazena apenas os acertos de cada apostador
        // array será incrementado na função getPoints()
        this.acertos = {};

        // variável para armazenar os pontos de cada apostador
        this.p = '';
        // variável que armazena as informações de cada linha(apostador)
        this.row = '';
        // id de onde aparecerá a tabela dos apostadores
        this.table = document.getElementById("tableRow");

        // variável armazena os dados de ranking
        this.row2 = '';
        // id onde será mostrado o ranking
        this.ranking = document.getElementById("tableRanking");

        // variáveis para a mudança de cor no backGrdound
        this.bg1 = '';
        this.bg2 = '';
        this.bg3 = '';
        this.bg4 = '';
        this.bg5 = '';
        this.bg6 = '';
        this.bg7 = '';
        this.bg8 = '';
        this.bg9 = '';
        this.bg10 = '';

        // função para mostrar a data atual
        this.getDate();
        //função de set para os números dos apostadores
        this.numbersOfBettors();
        //função de set para os números sorteados
        this.numbersDrawn();
        // função de set para os pontos de cada apostador
        this.setPoints();
        // atualiza o array dos apostadores
        this.updateNumbersOfBettors();
        // modifica a cor da célula conforme o acerto do apostador
        this.updateColors();
        // mostra os apostadores
        this.display();
        // mostra o ranking
        this.displayRanking();

        // id de onde aparecerá os concursos
        this.tableContests = document.getElementById("tableContests");
        // variável que armazena os concursos
        this.row4 = '';
        // função que mostra os concursos
        this.numbersContests();

        // id de onde aparecerá a mensagem quando algum apostador marcar 10 pontos
        this.win = document.getElementById("tableWinner");
        // variável para armazenar o(s)ganhadores
        this.row3 = '';
        // função que mostra modal do(s)ganhador(es)
        this.winner();

    }// construtor


    // pega a data do sistema e mostra na página
    getDate() {
        // this.today = this.dataAtual.toLocaleDateString(this.locale);
        this.today = `&copy${this.currentDate.getFullYear()}   Edvaldo Leite  `;
        this.dt.innerHTML = this.today;
    }//


    // pega somente os números de cada apostador
    numbersOfBettors() {
        for (let i = 0; i < this.apostadores.length; i++) {
            this.numbers[i] = [this.apostadores[i].n1, this.apostadores[i].n2, this.apostadores[i].n3, this.apostadores[i].n4, this.apostadores[i].n5, this.apostadores[i].n6, this.apostadores[i].n7, this.apostadores[i].n8, this.apostadores[i].n9, this.apostadores[i].n10];
        }

        //*********MENSAGEM NO CONSOLE***********/
        console.log("Números dos apostadores:")
        console.log(this.numbers);
        //***************************************/

    } // numbersOfBettors


    // pega somente os números de cada sorteio
    numbersDrawn() {
        for (let i = 0; i < this.concurso.length; i++) {
            this.contests[i] = [this.concurso[i].n1, this.concurso[i].n2, this.concurso[i].n3, this.concurso[i].n4, this.concurso[i].n5];
        }

        //*********MENSAGEM NO CONSOLE***********/
        console.log("Concursos:")
        console.log(this.contests);
        //**************************************/

    }// numbersDrawn


    // pesquisa em concursos e compara com os apostadores
    // define o número de pontos de cada apostador
    setPoints() {
        // percorre todo o array de apostadores
        for (let i = 0; i < this.apostadores.length; i++) {
            // associa cada indice de acertos  
            // a cada indice de apostadores
            this.acertos[i] = [this.apostadores[i]];

            // percorre todo o array de concursos
            for (let j = 0; j < this.concurso.length; j++) {
                // pesquisa no array contests
                this.contests[j].filter(element => {
                    // compara os números dos concursos com os números dos apostadores
                    // se houver algum elemento em comum
                    if (this.numbers[i].indexOf(element) > -1) {
                        // acrescenta esse elemento no array acertos
                        this.acertos[i].push(element);
                    }
                });
            } // for filho

            // elimina duplicidade de números nos acertos
            // atribui a variável (array p de cada loop) 
            this.p = [...new Set(this.acertos[i])];

            // define o número de pontos de cada apostador
            // define p como o número de acertos de cada apostador
            this.apostadores[i].pontos = this.p.length - 1;

            //*********************MENSAGEM NO CONSOLE********************/
            console.log("****************************");
            console.log("ACERTOS APOSTADOR: " + this.apostadores[i].nome);
            console.log(this.p);

            console.log("TOTAL DE PONTOS");
            console.log(this.p.length - 1);
            this.apostadores[i].pontos = this.p.length - 1;
            //************************************************************/

        } // for pai

    }// setPoints

    // atualiza o array agora com os pontos de cada jogador
    updateNumbersOfBettors() {
        // atualiza o array apostadores do maior número de acertos para o menor
        this.apostadores.sort(function (a, b) {
            if (a.pontos > b.pontos) {
                return -1;
            }
            if (a.pontos < b.pontos) {
                return 1;
            }
            return 0;
        });// 

        //*********MENSAGEM NO CONSOLE***********/
        console.log("Pontuação:")
        console.log(this.apostadores);
        //**************************************/
    }// updateNumberOfBettors


    //***************************************************************************************************/
    //***************************************************************************************************/
    //***************************************************************************************************/
    // pinta os campos de acertos e atualiza a tabela
    updateColors() {

        for (let i = 0; i < this.apostadores.length; i++) {
            //****************CONCURSO N1****************************/
            for (let j = 0; j < this.concurso.length; j++) {

                if (this.concurso[j].n1 == this.apostadores[i].n1) {
                    this.bg1 = "text-light bg-success  p-3";
                    break;
                } else {
                    this.bg1 = "";
                }
            } // __________________________________________________

            for (let j = 0; j < this.concurso.length; j++) {
                if (this.concurso[j].n1 == this.apostadores[i].n2) {
                    this.bg2 = "text-light  bg-success p-3";
                    break;
                } else {
                    this.bg2 = "";
                }
            } // __________________________________________________
            for (let j = 0; j < this.concurso.length; j++) {
                if (this.concurso[j].n1 == this.apostadores[i].n3) {
                    this.bg3 = "text-light  bg-success p-3";
                    break;
                } else {
                    this.bg3 = "";
                }
            } // __________________________________________________
            for (let j = 0; j < this.concurso.length; j++) {
                if (this.concurso[j].n1 == this.apostadores[i].n4) {
                    this.bg4 = "text-light  bg-success p-3";
                    break;
                } else {
                    this.bg4 = "";
                }
            } // __________________________________________________
            for (let j = 0; j < this.concurso.length; j++) {
                if (this.concurso[j].n1 == this.apostadores[i].n5) {
                    this.bg5 = "text-light  bg-success p-3";
                    break;
                } else {
                    this.bg5 = "";
                }
            } // __________________________________________________
            for (let j = 0; j < this.concurso.length; j++) {
                if (this.concurso[j].n1 == this.apostadores[i].n6) {
                    this.bg6 = "text-light  bg-success p-3";
                    break;
                } else {
                    this.bg6 = "";
                }
            } // __________________________________________________
            for (let j = 0; j < this.concurso.length; j++) {
                if (this.concurso[j].n1 == this.apostadores[i].n7) {
                    this.bg7 = "text-light  bg-success p-3";
                    break;
                } else {
                    this.bg7 = "";
                }
            } // __________________________________________________
            for (let j = 0; j < this.concurso.length; j++) {
                if (this.concurso[j].n1 == this.apostadores[i].n8) {
                    this.bg8 = "text-light  bg-success p-3";
                    break;
                } else {
                    this.bg8 = "";
                }
            } // __________________________________________________
            for (let j = 0; j < this.concurso.length; j++) {
                if (this.concurso[j].n1 == this.apostadores[i].n9) {
                    this.bg9 = "text-light  bg-success p-3";
                    break;
                } else {
                    this.bg9 = "";
                }
            } // __________________________________________________
            for (let j = 0; j < this.concurso.length; j++) {
                if (this.concurso[j].n1 == this.apostadores[i].n10) {
                    this.bg10 = "text-light  bg-success p-3";
                    break;
                } else {
                    this.bg10 = "";
                }
            }
            //*****************FIM DO CAMPO 1************************
            //*******************************************************
            //*******************************************************

            //********************CAMPO 2 ***************************
            for (let j = 0; j < this.concurso.length; j++) {

                if (this.concurso[j].n2 == this.apostadores[i].n1) {
                    this.bg1 = "text-light  bg-success p-3";
                    break;
                }
            } // __________________________________________________

            for (let j = 0; j < this.concurso.length; j++) {
                if (this.concurso[j].n2 == this.apostadores[i].n2) {
                    this.bg2 = "text-light  bg-success p-3";
                    break;
                }
            } // __________________________________________________
            for (let j = 0; j < this.concurso.length; j++) {
                if (this.concurso[j].n2 == this.apostadores[i].n3) {
                    this.bg3 = "text-light  bg-success p-3";
                    break;
                }
            } // __________________________________________________
            for (let j = 0; j < this.concurso.length; j++) {
                if (this.concurso[j].n2 == this.apostadores[i].n4) {
                    this.bg4 = "text-light  bg-success p-3";
                    break;
                }
            } // __________________________________________________
            for (let j = 0; j < this.concurso.length; j++) {
                if (this.concurso[j].n2 == this.apostadores[i].n5) {
                    this.bg5 = "text-light  bg-success p-3";
                    break;
                }
            } // __________________________________________________
            for (let j = 0; j < this.concurso.length; j++) {
                if (this.concurso[j].n2 == this.apostadores[i].n6) {
                    this.bg6 = "text-light  bg-success p-3";
                    break;
                }
            } // __________________________________________________
            for (let j = 0; j < this.concurso.length; j++) {
                if (this.concurso[j].n2 == this.apostadores[i].n7) {
                    this.bg7 = "text-light  bg-success p-3";
                    break;
                }
            } // __________________________________________________
            for (let j = 0; j < this.concurso.length; j++) {
                if (this.concurso[j].n2 == this.apostadores[i].n8) {
                    this.bg8 = "text-light  bg-success p-3";
                    break;
                }
            } // __________________________________________________
            for (let j = 0; j < this.concurso.length; j++) {
                if (this.concurso[j].n2 == this.apostadores[i].n9) {
                    this.bg9 = "text-light  bg-success p-3";
                    break;
                }
            } // __________________________________________________
            for (let j = 0; j < this.concurso.length; j++) {
                if (this.concurso[j].n2 == this.apostadores[i].n10) {
                    this.bg10 = "text-light  bg-success p-3";
                    break;
                }
            }
            //*****************FIM DO CAMPO 2************************
            //*******************************************************
            //******************************************************

            //********************CAMPO 3 ***************************
            for (let j = 0; j < this.concurso.length; j++) {

                if (this.concurso[j].n3 == this.apostadores[i].n1) {
                    this.bg1 = "text-light  bg-success p-3";
                    break;
                }
            } // __________________________________________________

            for (let j = 0; j < this.concurso.length; j++) {
                if (this.concurso[j].n3 == this.apostadores[i].n2) {
                    this.bg2 = "text-light  bg-success p-3";
                    break;
                }
            } // __________________________________________________
            for (let j = 0; j < this.concurso.length; j++) {
                if (this.concurso[j].n3 == this.apostadores[i].n3) {
                    this.bg3 = "text-light  bg-success p-3";
                    break;
                }
            } // __________________________________________________
            for (let j = 0; j < this.concurso.length; j++) {
                if (this.concurso[j].n3 == this.apostadores[i].n4) {
                    this.bg4 = "text-light  bg-success p-3";
                    break;
                }
            } // __________________________________________________
            for (let j = 0; j < this.concurso.length; j++) {
                if (this.concurso[j].n3 == this.apostadores[i].n5) {
                    this.bg5 = "text-light  bg-success p-3";
                    break;
                }
            } // __________________________________________________
            for (let j = 0; j < this.concurso.length; j++) {
                if (this.concurso[j].n3 == this.apostadores[i].n6) {
                    this.bg6 = "text-light  bg-success p-3";
                    break;
                }
            } // __________________________________________________
            for (let j = 0; j < this.concurso.length; j++) {
                if (this.concurso[j].n3 == this.apostadores[i].n7) {
                    this.bg7 = "text-light  bg-success p-3";
                    break;
                }
            } // __________________________________________________
            for (let j = 0; j < this.concurso.length; j++) {
                if (this.concurso[j].n3 == this.apostadores[i].n8) {
                    this.bg8 = "text-light  bg-success p-3";
                    break;
                }
            } // __________________________________________________
            for (let j = 0; j < this.concurso.length; j++) {
                if (this.concurso[j].n3 == this.apostadores[i].n9) {
                    this.bg9 = "text-light  bg-success p-3";
                    break;
                }
            } // __________________________________________________
            for (let j = 0; j < this.concurso.length; j++) {
                if (this.concurso[j].n3 == this.apostadores[i].n10) {
                    this.bg10 = "text-light  bg-success p-3";
                    break;
                }
            }

            //*****************FIM DO CAMPO 3************************
            //*******************************************************
            //******************************************************

            //********************CAMPO 4 ***************************
            for (let j = 0; j < this.concurso.length; j++) {

                if (this.concurso[j].n4 == this.apostadores[i].n1) {
                    this.bg1 = "text-light  bg-success p-3";
                    break;
                }
            } // __________________________________________________

            for (let j = 0; j < this.concurso.length; j++) {
                if (this.concurso[j].n4 == this.apostadores[i].n2) {
                    this.bg2 = "text-light  bg-success p-3";
                    break;
                }
            } // __________________________________________________
            for (let j = 0; j < this.concurso.length; j++) {
                if (this.concurso[j].n4 == this.apostadores[i].n3) {
                    this.bg3 = "text-light  bg-success p-3";
                    break;
                }
            } // __________________________________________________
            for (let j = 0; j < this.concurso.length; j++) {
                if (this.concurso[j].n4 == this.apostadores[i].n4) {
                    this.bg4 = "text-light  bg-success p-3";
                    break;
                }
            } // __________________________________________________
            for (let j = 0; j < this.concurso.length; j++) {
                if (this.concurso[j].n4 == this.apostadores[i].n5) {
                    this.bg5 = "text-light  bg-success p-3";
                    break;
                }
            } // __________________________________________________
            for (let j = 0; j < this.concurso.length; j++) {
                if (this.concurso[j].n4 == this.apostadores[i].n6) {
                    this.bg6 = "text-light  bg-success p-3";
                    break;
                }
            } // __________________________________________________
            for (let j = 0; j < this.concurso.length; j++) {
                if (this.concurso[j].n4 == this.apostadores[i].n7) {
                    this.bg7 = "text-light  bg-success p-3";
                    break;
                }
            } // __________________________________________________
            for (let j = 0; j < this.concurso.length; j++) {
                if (this.concurso[j].n4 == this.apostadores[i].n8) {
                    this.bg8 = "text-light  bg-success p-3";
                    break;
                }
            } // __________________________________________________
            for (let j = 0; j < this.concurso.length; j++) {
                if (this.concurso[j].n4 == this.apostadores[i].n9) {
                    this.bg9 = "text-light  bg-success p-3";
                    break;
                }
            } // __________________________________________________
            for (let j = 0; j < this.concurso.length; j++) {
                if (this.concurso[j].n4 == this.apostadores[i].n10) {
                    this.bg10 = "text-light  bg-success p-3";
                    break;
                }
            }

            //*****************FIM DO CAMPO 4************************
            //*******************************************************
            //******************************************************

            //********************CAMPO 5 ***************************
            for (let j = 0; j < this.concurso.length; j++) {

                if (this.concurso[j].n5 == this.apostadores[i].n1) {
                    this.bg1 = "text-light  bg-success p-3";
                    break;
                }
            } // __________________________________________________

            for (let j = 0; j < this.concurso.length; j++) {
                if (this.concurso[j].n5 == this.apostadores[i].n2) {
                    this.bg2 = "text-light  bg-success p-3";
                    break;
                }
            } // __________________________________________________
            for (let j = 0; j < this.concurso.length; j++) {
                if (this.concurso[j].n5 == this.apostadores[i].n3) {
                    this.bg3 = "text-light  bg-success p-3";
                    break;
                }
            } // __________________________________________________
            for (let j = 0; j < this.concurso.length; j++) {
                if (this.concurso[j].n5 == this.apostadores[i].n4) {
                    this.bg4 = "text-light  bg-success p-3";
                    break;
                }
            } // __________________________________________________
            for (let j = 0; j < this.concurso.length; j++) {
                if (this.concurso[j].n5 == this.apostadores[i].n5) {
                    this.bg5 = "text-light  bg-success p-3";
                    break;
                }
            } // __________________________________________________
            for (let j = 0; j < this.concurso.length; j++) {
                if (this.concurso[j].n5 == this.apostadores[i].n6) {
                    this.bg6 = "text-light  bg-success p-3";
                    break;
                }
            } // __________________________________________________
            for (let j = 0; j < this.concurso.length; j++) {
                if (this.concurso[j].n5 == this.apostadores[i].n7) {
                    this.bg7 = "text-light  bg-success p-3";
                    break;
                }
            } // __________________________________________________
            for (let j = 0; j < this.concurso.length; j++) {
                if (this.concurso[j].n5 == this.apostadores[i].n8) {
                    this.bg8 = "text-light  bg-success p-3";
                    break;
                }
            } // __________________________________________________
            for (let j = 0; j < this.concurso.length; j++) {
                if (this.concurso[j].n5 == this.apostadores[i].n9) {
                    this.bg9 = "text-light  bg-success p-3";
                    break;
                }
            } // __________________________________________________
            for (let j = 0; j < this.concurso.length; j++) {
                if (this.concurso[j].n5 == this.apostadores[i].n10) {
                    this.bg10 = "text-light  bg-success p-3";
                    break;
                }
            }

            //*****************FIM DO CAMPO 5************************

            this.row +=
                `
                   <tr align="center">
                   <th id="nameAp"  style="color: #595959">${this.apostadores[i].nome}</th>
                   <td id="n1" class="${this.bg1}">${this.apostadores[i].n1}</td>
                   <td id="n2" class="${this.bg2} ">${this.apostadores[i].n2}</td>
                   <td id="n3" class="${this.bg3} ">${this.apostadores[i].n3}</td> 
                   <td id="n4" class="${this.bg4} ">${this.apostadores[i].n4}</td> 
                   <td id="n5" class="${this.bg5} ">${this.apostadores[i].n5}</td> 
                   <td id="n6" class="${this.bg6} ">${this.apostadores[i].n6}</td>
                   <td id="n7" class="${this.bg7} ">${this.apostadores[i].n7}</td>
                   <td id="n8" class="${this.bg8} ">${this.apostadores[i].n8}</td> 
                   <td id="n9" class="${this.bg9} ">${this.apostadores[i].n9}</td> 
                   <td id="n10" class="${this.bg10} ">${this.apostadores[i].n10}</td>   
                   </tr>
               `;

        } // for pai
    } // fim de update colors
    //***************************************************************************************************/
    //***************************************************************************************************/
    //***************************************************************************************************/
    //***************************************************************************************************/


    display() {
        // imprime o id table
        this.table.innerHTML = this.row;
    }

    displayRanking() {
        let x = 1;
        for (let i = 0; i < this.apostadores.length; i++) {

            this.row2 +=
                `
               <tr align="center">
               <th>${x}º</th>
               <td>${this.apostadores[i].nome}</td>
               <th> ${this.apostadores[i].pontos}</th>     
               </tr>
           `;
            x++;
        }
        this.ranking.innerHTML = this.row2;
    } // ranking


    numbersContests() {
        for (let i = 0; i < this.concurso.length; i++) {
            this.row4 +=
                `
                <tr align="center">
                <td>${this.concurso[i].data}</td>
                <td>${this.concurso[i].concNum}</td>
                <td>${this.concurso[i].n1}</td>
                <td>${this.concurso[i].n2}</td>
                <td>${this.concurso[i].n3}</td>
                <td>${this.concurso[i].n4}</td>
                <td>${this.concurso[i].n5}</td>
                </tr>
            `
        }
        this.tableContests.innerHTML = this.row4;
    }

    winner() {
        let x = 1;
        for (let i = 0; i < this.apostadores.length; i++) {

            if (this.apostadores[i].pontos == 10) {
                this.row3 +=
                    `
                <tr align="center">
                <th>${x}º</th>
                <td>${this.apostadores[i].nome}</td>
                <th> ${this.apostadores[i].pontos}</th>     
                </tr>
            `;
                x++;
                // abre o modal caso o if seja verdadeiro
                $('#winner').modal('show');
            }
        }
        this.win.innerHTML = this.row3;
    }// winner



} // FIM DA CLASSE





