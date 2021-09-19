import { Summary } from "../summary";
import { TransactionsTable } from "../transactionTable";
import { Container } from "./styles";

export function Dashboard() {
    return (
        <Container>
            <Summary />
            <TransactionsTable />
        </Container>
    )
}