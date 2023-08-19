import { useState } from 'react';
import { Form, Col, Row } from 'react-bootstrap';
import Chart from 'react-apexcharts';


const MortgageCalculator = () => {

  const [houseCost, setHouseCost] = useState(600000);
  const [downPayment, setDownPayment] = useState(60000);
  const [loanTime, setLoanTime] = useState(30);
  const [interestRate, setInterestRate] = useState(7);

  const [propertyTax, setPropertyTax] = useState(1300);
  const [homeInsurance, setHomeInsurance] = useState(1000);
  const [hoaDues, setHoaDues] = useState(600);

  const calculateMortgagePayment = () => {
    let mortgagePaymentBalance = 0;
    let principal = houseCost - downPayment;

    let mr = interestRate / 12 / 100; // interest rate per month
    let mlp = loanTime * 12; // loan payment in months

    mortgagePaymentBalance = (principal * mr * Math.pow(1 + mr, mlp)) / (Math.pow(1 + mr, mlp) - 1);

    let totalMonthlyPayment = mortgagePaymentBalance + propertyTax + homeInsurance + hoaDues
    
    return { mortgagePaymentBalance: mortgagePaymentBalance, totalMonthlyPayment: totalMonthlyPayment }
  }

// graph
const options = {
  labels: ['Monthly Mortgage Payment', 'Property Tax', 'Home Insurance', 'HOA Dues']
}
const series = [calculateMortgagePayment().mortgagePaymentBalance, propertyTax, homeInsurance, hoaDues]



  return (
    <div className="mortgageCalculatorContainer">
      <div className="calcHeaders">
        <h2>Mortgage Calculator</h2>
        <h5>Find out how much home you can afford!</h5>
      </div>
      <div className="formPlusChartDiv">
        <Form>
          <Form.Group className="mb-3" as={Row}>
            <Form.Label className="calcLabels" column md={6}>
              Total Cost of the Home:
            </Form.Label>
            <Col md={5}>
              <Form.Control className="formInputs" type='number' value={houseCost} onChange={(e) => setHouseCost(Number(e.target.value))} step='any' />
            </Col>
          </Form.Group>

          <Form.Group className="mb-3" as={Row}>
            <Form.Label className="calcLabels" column md={6}>
              Down Payment:
            </Form.Label>
            <Col md={5}>
              <Form.Control className="formInputs" type='number' value={downPayment} onChange={(e) => setDownPayment(Number(e.target.value))} step='any' />
            </Col>
          </Form.Group>

          <Form.Group className="mb-3" as={Row}>
            <Form.Label className="calcLabels" column md={6}>
              Interest Rate:
            </Form.Label>
            <Col md={5}>
              <Form.Control className="formInputs" type='number' value={interestRate} onChange={(e) => setInterestRate(Number(e.target.value))} step='any' />
            </Col>
          </Form.Group>

          <Form.Group className="mb-3" as={Row}>
            <Form.Label className="calcLabels" column md={6}>
              Number of Years on the Loan:
            </Form.Label>
            <Col md={5}>
              <Form.Control className="formInputs" type='number' value={loanTime} onChange={(e) => setLoanTime(Number(e.target.value))} step='any' />
            </Col>
          </Form.Group>
        </Form>

        <div className="calcChart">
          <Chart options={options} series={series} type="donut" width={580} />
        </div>
      </div>
      <div className="resultsDiv">
        <h3>Your Monthly Mortgage Payment is:</h3>
        <span className="mortgageResult">${calculateMortgagePayment().mortgagePaymentBalance.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</span>
        <h4>Your Total Monthly Payment is:</h4>
        <span className="totalResult">${calculateMortgagePayment().totalMonthlyPayment.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</span>
      </div>
    </div>
  )
}

export default MortgageCalculator;