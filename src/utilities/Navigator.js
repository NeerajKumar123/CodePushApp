import React, { Component } from 'react';
import { Router,Stack, Scene } from 'react-native-router-flux';
import Dashboard from '../pages/Dashboard'
import Login from '../pages/Login'
import PreQuote from '../pages/PreQuote'
import QuotesPage from '../pages/QuotesPage'
import TWLandingPage from '../pages/TWLandingPage'
import CarLandingPage from '../pages/CarLandingPage'
import CarRegistraionDetails from '../pages/CarRegistraionDetails'
import CarQuotes from '../pages/CarQuotes'
import PriceBreakupUI from '../pages/PriceBreakupUI'
import MotorProposalStep1 from '../pages/MotorProposalStep1'
import MotorProposalStep2 from '../pages/MotorProposalStep2'
import MotorProposalStep3 from '../pages/MotorProposalStep3'
import ProposalSummary from '../pages/ProposalSummary'


export default class Navigator extends Component{
  render() {
    return(
      <Router>
          <Stack key="root" hideNavBar={false} barButtonIconStyle={{ tintColor: 'green' }}>
            <Scene key="dashboard" component={Dashboard} title="" hideNavbar={false}  backButtonTintColor ={{ tintColor: 'red' }} navTransparent={true} initial={true} />
            <Scene key="prequote" component={PreQuote} title="PreQuote" hideNavbar={false} initial={false} />
            <Scene key="login" component={Login} title="login" hideNavbar={false}  initial={false} />
            <Scene key="quotes" component={QuotesPage} title="Quotes" hideNavbar={false} initial={false} />
            <Scene key="twlandingPage" component={TWLandingPage} title="" hideNavbar={false} initial={false} />
            <Scene key="carLandingPage" component={CarLandingPage} title="" hideNavbar={false}  initial={false}/>
            <Scene key="carRegistraionDetails" component={CarRegistraionDetails} title="Registration Details" hideNavbar={false}  initial={false}/>
            <Scene key="carQuotes" component={CarQuotes} title="" hideNavbar={false}  initial={false}  modal/> 
            <Scene key="priceBreakup" component={PriceBreakupUI} title="Summary" hideNavbar={false}  initial={false}/>     
            <Scene key="proposalStep1" component={MotorProposalStep1} title="Proposal 1" hideNavbar={false}  initial={false}/>     
            <Scene key="proposalStep2" component={MotorProposalStep2} title="Proposal 2" hideNavbar={false}  initial={false}/>     
            <Scene key="proposalStep3" component={MotorProposalStep3} title="Proposal 3" hideNavbar={false}  initial={false}/>     
            <Scene key="proposalSummary" component={ProposalSummary} title="Proposal Summary" hideNavbar={false}  initial={false}/>    
          </Stack>
        </Router>
    );
  }
}
