## Universidade Federal de Ouro Preto

<p align="center" style="margin-bottom: 200px">
  <img width="174" src="http://www3.decom.ufop.br/decom/site_media/img/logos-ufop-decom.png" alt="decomImg">
</p>

### Engenharia de Software II
*Sistema de Pedágio<br>
Grupo: Caffeine++*

|           |                             |
|-----------|-----------------------------|
| Alunos    | Lucas Moreira               |
|           | Lucas Urzedo                |
|           | Matheus Henrique            |
|           | Sabrina Suellen             |
|           | Victor Martins              |
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

| Data       | Versão | Descrição                                             | Autor   |
|------------|--------|-------------------------------------------------------|---------|
| 18/06/2021 | 0.0    | Justificativa do Processo de Software                 | Sabrina |
| 26/08/2021 | 0.0    | Levantamento e in ́ıcio da Especificacao de Requisitos | Victor  |

Tabela 1: Revisões do Documento

<a id="process-and-software"></a>

## 2 Processo e Software

  Após analisado o problema dado foi discutido que o processo de software que melhor atende o que deve ser feito e a forma como será feito é a metodologia ágil Scrum. Por meio deste modelo é possível manter o alinhamento da equipe de produção com o cliente ou usuário final, visto que a cada incremento de valor existe a validação do cliente para que o projeto siga de forma rápida e consistente com o que á esperado.

<a id="schedule"></a>

## 3 Cronograma

| Nome  | Tarefa             | Prazo                                             |
|-------|--------------------|---------------------------------------------------|
| RF01  | Gestão de Usuário  | Permite e gerencia o acesso do usuário ao sistema |
| RF02  | Gerir pagamento    | Realiza o pagamento do pedágio                    |
| RF03  | Gerar relatório    | Resume e exibe os pagamentos ja realizados        |

Tabela 3: Descrição dos Casos de Uso

<a id="requirements-gathering"></a>

## 4 Levantamento de Requisitos

### 4.1 Diagrama de Casos de Uso

<p align="center">
<img src="docs/img/use-case.png" />
Figura 1: Diagrama dos Casos de Uso
</p>


### 4.2 Descrição de Casos de Uso

| Código                                         | Serviço                                                          | Descrição |
|----------------------------------------------|-----------------------------------------------------------------|-------|
| Sabrina Suellen                              | Justificativa do processo de software                           | 21/06 |
| Victor Martins                               | Levantamento e início da Especificação de Requisitos          | 28/06 |
| -                                            | Plano de verificação, Validação e teste de software             | 26/07 |
| -                                            | Implementar os casos de teste e usar as ferramentas (ex JUNIT)  | 00/00 |

Tabela 3: Descrição dos Casos de Uso

<a id="requirement-specifications"></a>

## 5 Especificações de Requisitos

<a id="functional-requirements"></a>

### 5.1 Requisitos Funcionais

**RF01– Gestão de Usuário** Serviço relacionado às tarefas de autenticação do operador de pedágio.

-   **Cadastro:** O registro do operador no sistema é realizado a partir da entrada dos dados via campo de texto. São os dados de nome, data de nascimento, cidade/estado, registro pessoal, e-mail e senha.

-   **Recuperação de senha:** A recuperação de senha ocorre a partir da entrada dos dados via campo de texto. São os dados de nome e registro pessoal previamente cadastrados e da nova senha.

-   **Login:** O login é realizado a partir da entrada do nome e da senha previamente cadastrados, ambos previamente cadastrados.

**Regras**:

-   O sistema deve verificar se data de nascimento, registro pessoal e email são valores válidos.

-   Quando for realizado o Login ou a Recuperação de Senha, o sistema deve validar se os dados informados correspondem aos dados que populam o banco de dados.

**RF02– Gerir Pagamento** Serviço relacionado a efetuação do pagamento do pedágio. São informados os seguintes dados via campo de texto: tipo
de veículo, placa do veículo, método de pagamento, valor e anotação (opcional). O sistema retorna o troco baseado no valor pago.

**Regras**:

-   O sistema deve validar o valor pago. Ele deve ser maior que zero e maior ou igual ao valor estipulado para pagamento.

**RF03– Gerar Relatório** Serviço relacionado a geração de um relatório com a quantidade total de pagamentos realizados em relação à categoria do veículo.

<a id="non-functional-requirements"></a>

### 5.2 Requisitos Não Funcionais

 **RNF01** A efetivação da reserva do pacote, só deve ser liberada após o cliente estar logado no sistema. **Informações:** usuário e senha.

**Regras:** o cliente terá acesso para comprar, consultar e alterar.

**RNF02**Compatibilidade com os sistemas operacionais Windows e Linux.

<a id="vvt-plan"></a>

## 6 Plano de VVT

<p>Asseguram que o software cumpra com suas especificações e atenda às necessidades dos usuários. Você deve apresentar um plano de testes, ferramentas que serão utilizadas e coisas do tipo.</p>
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
