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

# Processo e Software

Após analisado o problema dado foi discutido que o processo de software que melhor atende o que deve ser feito e a forma
como será feito é a metodologia ágil Scrum. Por meio deste modelo é possível manter o alinhamento da equipe de produção
com o cliente ou usuário final, visto que a cada incremento de valor existe a validação do cliente para que o projeto
siga de forma rápida e consistente com o que é esperado.

# Cronograma

| Código          | Serviço                                                        | Descrição |
| :-------------- | :------------------------------------------------------------- | :-------- |
| Sabrina Suellen | Justificativa do processo de software                          | 21/06     |
| Victor Martins  | Levantamento e início da Especificação de Requisitos           | 28/06     |
| \-              | Plano de verificação, Validação e teste de software            | 26/07     |
| \-              | Implementar os casos de teste e usar as ferramentas (ex JUNIT) | 00/00     |

# Levantamento de Requisitos

## Diagrama de Caso de Uso

![Diagrama de Casos de Uso](docs/img/use-case.png)

## Descrição de Caso de Uso

| Nome | Tarefa            | Prazo                                             |
| :--- | :---------------- | :------------------------------------------------ |
| RF01 | Gestão de Usuário | Permite e gerencia o acesso do usuário ao sistema |
| RF02 | Gerir pagamento   | Realiza o pagamento do pedágio                    |
| RF03 | Gerar relatório   | Resume e exibe os pagamentos ja realizados        |

Tabela 3: Descrição dos Casos de Uso

# Especificação de Requisitos

## Requisitos Funcionais

**RF01– Gestão de Usuário** Serviço relacionado às tarefas de autenticação do operador de pedágio.

- **Cadastro:** O registro do operador no sistema é realizado a partir da entrada dos dados via campo de texto. São os
  dados de nome, data de nascimento, cidade/estado, registro pessoal, e-mail e senha.

- **Recuperação de senha:** A recuperação de senha ocorre a partir da entrada dos dados via campo de texto. São os dados
  de nome e registro pessoal previamente cadastrados e da nova senha.

- **Login:** O login é realizado a partir da entrada do nome e da senha previamente cadastrados, ambos previamente
  cadastrados.

**Regras**:

- O sistema deve verificar se data de nascimento, registro pessoal e email são valores válidos.

- Quando for realizado o Login ou a Recuperação de Senha, o sistema deve validar se os dados informados correspondem aos
  dados que populam o banco de dados.

**RF02– Gerir Pagamento** Serviço relacionado a efetuação do pagamento do pedágio. São informados os seguintes dados via
campo de texto: tipo de veículo, placa do veículo, método de pagamento, valor e anotação
(opcional). O sistema retorna o troco baseado no valor pago. **Regras**:

- O sistema deve validar o valor pago. Ele deve ser maior que zero e maior ou igual ao valor estipulado para pagamento.

**RF03– Gerar Relatório** Serviço relacionado a geração de um relatório com a quantidade total de pagamentos realizados
em relação à categoria do veículo.

## Requisitos Não Funcionais

### Usabilidade

**RNF01** A aplicação a ser desenvolvida deverá ser de fácil aprendizagem, bem estruturado e sinalizando.

### Desempenho

**RNF02 Capacidade** A aplicação não possui limite de usuários, essa quantidade de funcionários deve ser administrado
pelo gerente do Pedágio

### Portabilidade

**RNF03 Tecnologias Utilizadas para o desenvolvimento** A tecnologia adotada para desenvolvimento será JavaScript.

**RNF04 Compatibilidade com Navegador** A aplicação será compatível com todos os navegadores.

### Requisitos Legais

**RNF05** Privacidade quanto aos dados dos funcionários cadastrados.

### Requisitos de Segurança

**RNF06** Realização de login com código e senhas cadastrado no sistema.

### Manutenibilidade

**RNF07** Os componentes a serem desenvolvidos para o sistema devem possuir extensibilidade, ou seja, devem facilitar a
adição de novas características que se fizerem necessárias.

# Plano de VVT

Asseguram que o software cumpra com suas especificações e atenda às necessidades dos usuários. Você deve apresentar um
plano de testes, ferramentas que serão utilizadas e coisas do tipo.

Veja um exemplo no link:
<https://www.cin.ufpe.br/~gta/rup-vc/extend.formal_resources/guidances/examples/resources/test_plan_v1.htm>

## Requisitos a serem testados

Esta seção descreve em linhas gerais o conjunto de requisitos a serem testados no projeto a ser desenvolvido,
comunicando o que deve ser verificado. Exemplos de requisitos a serem testados são: desempenho, segurança, interface de
usuário, controle de acesso, funcionalidades.

## Estratégias e ferramentas de teste

Apresenta um conjunto de tipos de testes a serem realizados, respectivas técnicas empregadas e critério de finalização
de teste. Além disso, é listado o conjunto de ferramentas utilizadas.

## Equipe e infra-estrutura

Contém descrição da equipe e da infra-estrutura utilizada para o desenvolvimento das atividades de testes, incluindo:
pessoal, equipamentos, software de apoio, materiais, dentre outros. Isto visa garantir uma estrutura adequada para a
execução das atividades de testes previstas no plano.

## Execução do Plano de Teste


# Medição e Qualidade de Software

Apresente aqui o formato da Medição e qualidade de software. Você deve mostrar os meios que irá avaliar a qualidade do
seu software. Apresente o plano e os resultados a partir da prática de ferramentas de detecção de code smells, por
exemplo. Em Java, temos uma ferramenta chamada JDEODORANT. Você pode avaliar as métricas de qualidade também, por
exemplo, em Java, temos CKMetrics\[1\]

## 8 Observações

<p>Apresente aqui as dificuldades na disciplina, trabalho pr´atico e coisas do
tipo</p>

![image](https://user-images.githubusercontent.com/43671640/123296520-1899c380-d4ed-11eb-9ce4-3e6ff683fdfa.png)<br>
Figura 1: Exemplo

<a id="References"></a>

## 9 Referências

- [1] Chapman, S.J. – Electric Machinery Fundamentals, 4th Edition;
- [2] Fitzgerald, A. E. – Máquinas Elétricas, 2da Edição;
