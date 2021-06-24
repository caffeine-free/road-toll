## Universidade Federal de Ouro Preto

<p align="center" style="margin-bottom: 200px">
  <img width="174" src="http://www3.decom.ufop.br/decom/site_media/img/logos-ufop-decom.png" alt="decomImg">
</p>

### Engenharia de Software II
*Sistema de Biblioteca<br>
Grupo: Caffeine++*

|           |                             |
|-----------|-----------------------------|
| Alunos    | Lucas Moreira               |
|           | Lucas Urzedo                |
|           | Matheus Henrique            |
|           | Victor Hugo                 |
| Professor | Msc prof. Johnatan Oliveira |
| Horário   | Ter & Qui - 15:20 - 17:20   |

*Ouro Preto, 18 de Junho de 2021*

## Conteúdo

- [1 Histórico de Revisões](#revisions-history)
- [2 Processo e Software](#process-and-software)
- [3 Cronograma](#schedule)
- [4 Levantamento de Requisitos](#requirements-gathering)
- [5 Especificações de Requisitos](#requirement-specifications)
  - [5.1 Requisitos Funcionais](#functional-requirements)
  - [5.2 Requisitos Não Funcionais](#non-functional-requirements)
- [6 Plano de VVT](#vvt-plan)
  - [6.1 Requisitos a serem testados](#requirements-to-be-tested)
  - [6.2 Estratégias e ferramentas de teste](#testing-strategies-and-tools)
  - [6.3 Equipe e infra-estrutura](#team-and-infrastructure)
  - [6.4 Execução do Plano de Teste](#test-plan-execution)
- [7 Medição e Qualidade de Software](#software-measurement-and-quality)
- [8 Observações](#comments)
- [9 Referências](#References)


<a id="revisions-history"></a>

## 1 Histórico de Revisões

| Data       | Versão | Descrição                             | Autor   |
|------------|--------|---------------------------------------|---------|
| 18/06/2021 | 0.0    | Justificativa do Processo de Software | Sabrina |
| 00/00/2021 | 0.0    |                                       |         |

Tabela 1: Revisões do Documento

<a id="process-and-software"></a>

## 2 Processo e Software

  Após analisado o problema dado foi discutido que o processo de software que melhor atende o que deve ser feito e a forma como será feito é a metodologia ágil Scrum. Por meio deste modelo é possível manter o alinhamento da equipe de produção com o cliente ou usuário final, visto que a cada incremento de valor existe a validação do cliente para que o projeto siga de forma rápida e consistente com o que á esperado.

<a id="schedule"></a>

## 3 Cronograma

| Nome                                         | Tarefa                                                          | Prazo |
|----------------------------------------------|-----------------------------------------------------------------|-------|
| Sabrina Suellen                              | Justificativa do processo de software                           | 21/06 |
| Lucas M., Lucas U., Matheus, Victor, Sabrina | Levantamento de Requisitos                                      | 28/06 |
| -                                            | Plano de verificação, Validação e teste de software             | 26/07 |
| -                                            | Implementar os casos de teste e usar as ferramentas (ex JUNIT)  | 00/00 |

Tabela 2: Cronograma

<a id="requirements-gathering"></a>

## 4 Levantamento de Requisitos

<p>Independente da metodologia de desenvolvimento utilizada, o levantamento de requisitos é o ponto de partida de qualquer projeto de software, pois é a partir dos resultados obtidos durante esta etapa que será possével definir como as próximas etapas do desenvolvimento serão executadas.</p>
<p>Apresente a técnica que a sua equipe irá utilizar, explique porquê de tal técnica e quais os resultados obtidos.</p>
Para o levantamento de requisitos, o analista dispõe de algumas técnicas que são utilizadas de acordo com o perfil do cliente.
Existem diversas técnicas, cada uma adequada para um cenário específico, e dentre as comumente utilizadas podemos citar as seguintes técnicas:</p>

- 1 . Descoberta de Requisitos (Pontos de vista)
- 2 . Entrevistas
- 3 . Cenários
- 4 . Casos de Uso
- 5 . Etnografia


<a id="requirement-specifications"></a>

## 5 Especificações de Requisitos

<a id="functional-requirements"></a>

### 5.1 Requisitos Funcionais

<p>Requisitos Funcionais são assuntos de importância fundamental ou essencial ao produto. Eles descrevem o que o produto tem de fazer ou que ações processuais deve tomar.</p>
<p>RF01– O portal deve oferecer a busca de passagens aéreas. Informações: Local de origem, local de destino, data de partida, data de volta, quantidade de adultos, quantidade de crianças, idade das crian¸cas. Regras: O sistema deve permitir que o visitante ou o cliente do portal possam executar a busca fornecendo as informações obrigatórias e, caso haja resultado para a consulta, o portal deve disponibilizar as passagens aéreas com seus preços, as companhias disponíveis, escala e conexões (se houver), origem, destino e horário. Caso não haja disponibilidade, deve ser informado ao cliente que não houve resultado para a consulta. A obtenção dos dados de passagens de avião deve ser efetivada através de uma interface de integração entre o portal e as companhias aéreas.</p>

 - O portal deve validar se as informações sobre local de origem, local de destino, data de partida, data da volta e número de pessoas estão preenchidos.
 - A data de partida deve ser maior ou igual à data corrente.
 - A data de volta deve ser maior ou igual à data de partida.
 - O número de adultos ou o número de crianças deve ser maior que zero. Por padrão, o portal deve preencher o número de adultos com 1(um).
 - Caso o número de crianças seja maior que 0 (zero), a idade deve ser preenchida.
 - Caso alguma das informações acima não cumpra essas regras, o portal deve informar o usuário a respeito do erro de preenchimento.
 - Caso o valor das passagens para crianças seja diferente do valor das passagens para adultos, deve ser apresentada qual a regra utilizada, por exemplo: "Crianças acima de 6 (seis) anos devem pagar valor integral".

RF02-<br>
RF03–<br>
(Etc...)

<a id="non-functional-requirements"></a>

### 5.2 Requisitos Não Funcionais

<p>Requisitos Não Funcionais são as propriedades que as funções devem ter, tais como desempenho e usabilidade. Não se detenha ao seu nome pouco apropriado (nós o usamos porque é a maneira mais comum de se referir a estes tipos de requisitos)—estes requisitos são tão importantes quanto as exigências funcionais, para o sucesso do produto.</p>
<p>RNF01. A efetivação da reserva do pacote, só deve ser liberada após o cliente estar logado no sistema. Informações: usuário e senha. Regras: o cliente terá acesso para comprar, consultar e alterar.</p>
ETC

<a id="vvt-plan"></a>

## 6 Plano de VVT

<p>Asseguram que o software cumpra com suas especificações e atenda às necessidades dos usu´arios. Você deve apresentar um plano de testes, ferramentas que serão utilizadas e coisas do tipo.</p>
<p>Veja um exemplo no link: <a href="https://www.cin.ufpe.br/~gta/rup-vc/extend.formal_resources/guidances/examples/resources/test_plan_v1.htm" target="_blank">https://www.cin.ufpe.br/~gta/rup-vc/extend.formal_resources/guidances/examples/resources/test_plan_v1.
htm</a></p>

<a id="requirements-to-be-tested"></a>

### 6.1 Requisitos a serem testados

<p>Esta seção descreve em linhas gerais o conjunto de requisitos a serem testados no projeto a ser desenvolvido, comunicando o que deve ser verificado. Exemplos de requisitos a serem testados são: desempenho, segurança,interface de usuário, controle de acesso, funcionalidades.</p>

<a id="testing-strategies-and-tools"></a>

### 6.2 Estratégias e ferramentas de teste

<p>Apresenta um conjunto de tipos de testes a serem realizados, respectivas técnicas empregadas e critério de finalização de teste. Além disso, é listado o conjunto de ferramentas utilizadas.</p>

<a id="team-and-infrastructure"></a>

### 6.3 Equipe e infra-estrutura

<p>Contém descrição da equipe e da infra-estrutura utilizada para o desenvolvimento das atividades de testes, incluindo: pessoal, equipamentos, software de apoio, materiais, dentre outros. Isto visa garantir uma estrutura adequada para a execução das atividades de testes previstas no plano.</p>

<a id="test-plan-execution"></a>

### 6.4 Execução do Plano de Teste

<a id="software-measurement-and-quality"></a>

## 7 Medição e Qualidade de Software

<p>Apresente aqui o formato da Medição e qualidade de software. Você deve mostrar os meios que irá avaliar a qualidade do seu software. Apresente o plano e os resultados a partir da prática de ferramentas de detecção de code smells, por exemplo. Em Java, temos uma ferramenta chamada JDEODORANT. Você pode avaliar as métricas de qualidade também, por exemplo, em Java, temos CKMetrics</p>

<a id="comments"></a>

## 8 Observações

<p>Apresente aqui as dificuldades na disciplina, trabalho pr´atico e coisas do
tipo</p>

![image](https://user-images.githubusercontent.com/43671640/123296520-1899c380-d4ed-11eb-9ce4-3e6ff683fdfa.png)<br>
Figura 1: Exemplo

<a id="References"></a>

## 9 Referências

 - [1] Chapman, S.J. – Electric Machinery Fundamentals, 4th Edition;
 - [2] Fitzgerald, A. E. – Máquinas Elétricas, 2da Edição;
