import { useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Dashboard from './pages/Dashboard';
import SupportCenter from './pages/SupportCenter';
import PersonalIncomeTaxGuide from './pages/PersonalIncomeTaxGuide';
import Services from './pages/Services';
import Home from './pages/Home';
import WithholdingTaxGuide from './pages/WithholdingTaxGuide';
import WithholdingTaxGuideOne from './pages/WithholdingTaxGuideOne';
import RentalIncomeTaxGuide from './pages/RentalIncomeTaxGuide';
import NewDigitalServiceTax from './pages/NewDigitalServiceTax';
import IncomeTaxReturnForm from './pages/IncomeTaxReturnForm';
import ExciseDutyGuide from './pages/ExciseDutyGuide';
import PersonalIncomeTaxGuideTwo from './pages/PersonalIncomeTaxGuideTwo';
import TaxComplianceCertificateGuide from './pages/TaxComplianceCertificateGuide';
import ValueAddedTaxGuide from './pages/ValueAddedTaxGuide';
import HomeOne from './pages/HomeOne';
import Guides from './pages/Guides';
import Blog from './pages/Blog';
import { BottomNav } from './components/common';
import { Footer } from './components/common';
import { Header } from './components/common';
import MakePayment from './pages/MakePayment';
import Register from './pages/Register';
import Login from './pages/Login';
import AccountSettings from './pages/AccountSettings';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <div className="App">
        <Header />
        <main
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            display: 'flex',
          }}
        >
          <Home />
        </main>
        <Footer />
        <BottomNav />
      </div>
    ),
  },
  {
    path: '/register',
    element: (
      <div className="App">
        <Header />
        <main
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            display: 'flex',
          }}
        >
          <Register />
        </main>
        <BottomNav />
      </div>
    ),
  },
  {
    path: '/login',
    element: (
      <div className="App">
        <Header />
        <main
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            display: 'flex',
          }}
        >
          <Login />
        </main>
        <BottomNav />
      </div>
    ),
  },
  {
    path: '/blog',
    element: (
      <div className="App">
        <Header />
        <main>
          <Blog />
        </main>
        <Footer />
        <BottomNav />
      </div>
    ),
  },
  {
    path: '/services',
    element: (
      <div className="App">
        <main>
          <Services />
        </main>
        <BottomNav />
      </div>
    ),
  },
  {
    path: '/guides',
    element: (
      <div className="App">
        <Header />
        <main>
          <Guides />
        </main>
        <BottomNav />
      </div>
    ),
  },
  {
    path: '/guides/exrcise-duty-guide',
    element: (
      <div className="App">
        <main>
          <ExciseDutyGuide />
        </main>
        <BottomNav />
      </div>
    ),
  },
  {
    path: '/guides/new-digital-service-tax',
    element: (
      <div className="App">
        <main>
          <NewDigitalServiceTax />
        </main>
        <BottomNav />
      </div>
    ),
  },
  {
    path: '/guides/personal-income-tax-guide',
    element: (
      <div className="App">
        <main>
          <PersonalIncomeTaxGuide />
        </main>
        <BottomNav />
      </div>
    ),
  },
  {
    path: '/guides/income-tax-return-form',
    element: (
      <div className="App">
        <main>
          <IncomeTaxReturnForm />
        </main>
        <BottomNav />
      </div>
    ),
  },
  {
    path: '/guides/rental-income-tax-guide',
    element: (
      <div className="App">
        <main>
          <RentalIncomeTaxGuide />
        </main>
        <BottomNav />
      </div>
    ),
  },
  {
    path: '/guides/value-added-tax-guide',
    element: (
      <div className="App">
        <main>
          <ValueAddedTaxGuide />
        </main>
        <BottomNav />
      </div>
    ),
  },
  {
    path: '/guides/withholding-tax-guide',
    element: (
      <div className="App">
        <main>
          <WithholdingTaxGuide />
        </main>
        <BottomNav />
      </div>
    ),
  },
  {
    path: '/guides/tax-compliance-certificate-guide',
    element: (
      <div className="App">
        <main>
          <TaxComplianceCertificateGuide />
        </main>
        <BottomNav />
      </div>
    ),
  },
  {
    path: '/support-center',
    element: (
      <div className="App">
        <main>
          <SupportCenter />
        </main>
        <BottomNav />
      </div>
    ),
  },
  {
    path: '/dashboard',
    element: (
      <div className="App">
        <main>
          <Dashboard />
        </main>
        <BottomNav />
      </div>
    ),
  },
  {
    path: '/account-settings',
    element: (
      <div className="App">
        <Header />
        <main>
          <AccountSettings />
        </main>
        <BottomNav />
      </div>
    ),
  },
]);

function App() {
  const [count, setCount] = useState(0);

  return <RouterProvider router={router} />;
}

export default App;