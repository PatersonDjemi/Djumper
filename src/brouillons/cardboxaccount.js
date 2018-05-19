const CardBox = (props) => {
    return (
        <div className="cardbank">
            <div className="entete-card">
                <div className="entete-text">
                    <span>{props.card}</span>
                    <div className="linkbank">{props.title}</div>
                </div>
                <div className="entete-img">
                    <Image src={props.src} height="55" width="55" className="imgbank" />
                </div>
            </div>
            <div className="body-card">
                {props.bodyText}
            </div>
            <div className="footer-card">
                <Button>{props.action}</Button>
            </div>
        </div>
    );
}


{/* <Grid stackable centered className="cardBox" >
<Grid.Column width={16}>
    <CardBox card="Bank card"
             title="Link a bank account"
             src={bank}
             bodyText="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor i
               nvidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
               At vero eos et accusam et justo duo dolores et ea rebum. Stet"
             action="add a bank account" />
</Grid.Column>
<Grid.Column width={8}>
    <CardBox card="Credit card"
             title="Link a credit card"
             src={credit}
             bodyText="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor i
               nvidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
               At vero eos et accusam et justo duo dolores et ea rebum. Stet"
             action="add a credit card" />
</Grid.Column>
<Grid.Column width={8}>
    <CardBox card="Paypal account"
             title="Link a paypal account"
             src={paypal}
             bodyText="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor i
               nvidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
               At vero eos et accusam et justo duo dolores et ea rebum. Stet"
             action="add a paypal account" />
</Grid.Column> */}