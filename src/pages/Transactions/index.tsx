import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { PriceHighlight, TransactionTable, TransactionsContainer } from "./styles";

export function Transactions() {
  return(
    <div>
      <Header/>
      <Summary/>

      <TransactionsContainer>
        <TransactionTable>
          <tbody>
            <tr>
              <td width="50%">Desenvolvimento de site</td>
              <td>
                <PriceHighlight variant="income">
                  R$ 1.250,00
                </PriceHighlight>
              </td>
              <td>Venda</td>
              <td>13/05/2023</td>
            </tr>
            <tr>
              <td width="50%">Fatura do cartão</td>
              <td>
              <PriceHighlight variant="outcome">
                  - R$ 250,00
                </PriceHighlight>
              </td>
              <td>Alimentação</td>
              <td>12/05/2023</td>
            </tr>    
          </tbody>
        </TransactionTable>
      </TransactionsContainer>
    </div>
  )
}