import React from 'react';
import { Container, Button, Image, Grid } from 'semantic-ui-react';

const Transaction = () => {
    return (
        <Container fluid className="transaction_banner">
            <Grid stackable centered >
                <Grid.Column width={6}>
                    <div className="total_transaction">
                        Total of transactions
                    </div>
                    <div className="montant">
                        <span style={{ marginRight: 12 }}>450,00</span>
                        <span>€</span>
                    </div>
                </Grid.Column>
                <Grid.Column width={6}>
                    montant par mois
                </Grid.Column>
            </Grid>
        </Container>

    );
}

export default Transaction;