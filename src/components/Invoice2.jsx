import React from "react";
import "../styles/invoice2.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Invoice2 = () => {
  return (
    <div className="receipt-container">
      {/* Header */}
      <div className="text-center mb-1">
        <h6 className="fw-bold mb-0">Millennium Specialized Hospital Ltd.</h6>
        <p className="mb-0">4/1, Ashraf Tower, Wari, Dhaka-1203</p>
        <strong>Millennium Unit-01</strong>
      </div>

      {/* Title */}
      <div className="text-center money-receipt-box">
        Money Receipt
      </div>

      {/* Info */}
      <div className="row mb-2">
        <div className="col">
          <p><strong>Invoice No :</strong> AR250502251</p>
          <p><strong>Patient ID :</strong> MS00054857</p>
          <p><strong>Patient Name :</strong> MD ALAMIN</p>
          <p><strong>Bed No :</strong> Cabin</p>
          <p><strong>Address :</strong> Jatrabari, Dhaka</p>
        </div>
        <div className="col text-end">
          <p><strong>Payment Date :</strong> 27-May-2025</p>
          <p><strong>Reg No :</strong> PR250501698</p>
        </div>
      </div>

      {/* Amounts */}
      <div className="row text-center border-top border-bottom py-2 mb-2 fw-bold">
        <div className="col">Advance Amount<br />20,000.00</div>
        <div className="col">Previous Advance<br />0.00</div>
        <div className="col">Total Receive<br />20,000.00</div>
      </div>

      {/* In Words */}
      <p><strong>In Word :</strong> TWENTY THOUSAND TAKA ONLY</p>

      {/* Remarks & Doctor */}
      <div className="d-flex justify-content-between align-items-start">
        <p><strong>Remarks :</strong></p>
        <p className="text-end">
          <strong>Dr. Md. Jinnat Hossain</strong><br />
          <small>MBBS, BCS, FCPS</small>
        </p>
      </div>

      {/* Payment Table */}
      <table className="table table-bordered table-sm text-center mb-2">
        <thead>
          <tr>
            <th className="fw-bold">PayMode</th>
            <th className="fw-bold">Amount</th>
            <th className="fw-bold">Cheque No</th>
            <th className="fw-bold">Bank Name</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>By Cash</td>
            <td>20,000.00</td>
            <td>-</td>
            <td>-</td>
          </tr>
        </tbody>
      </table>

      {/* Footer */}
      <div className="d-flex justify-content-between small mt-3">
        <div><strong>Posted by:</strong> system</div>
        <div><strong>Print Time:</strong> 27-May-2025 7:36 PM</div>
        <div><strong>Powered by:</strong> Millennium IT</div>
      </div>
    </div>
  );
};

export default Invoice2;
