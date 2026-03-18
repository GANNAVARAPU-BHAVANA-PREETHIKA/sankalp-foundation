import React, { useState } from 'react';
import { CreditCard, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { DonationFormData, FetchStatus } from '../types';
import { postData } from '../services/api';
import { assetPath } from '../services/assets';

const amounts = [500, 1000, 2500, 5000, 10000];

const Donate: React.FC = () => {
  const [step, setStep] = useState(1);


  const [formData, setFormData] = useState<DonationFormData>({
    amount: 1000,
    name: '',
    email: '',
    phone: '',
    city: '',
    wants80g: false,
    pan: '',
    address: '',
    pin: '',
    state: ''
  });



  const [wants80g, setWants80g] = useState(false);
  const [status, setStatus] = useState<FetchStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleNext = () => setStep(prev => prev + 1);
  const handleBack = () => setStep(prev => prev - 1);

  const handle80gChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWants80g(e.target.checked);
    setFormData(prev => ({ ...prev, wants80g: e.target.checked }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    const payload = {
      ...formData,
      wants80g
    };

    try {
      await postData('/api/donate', payload, false);
      setStatus('success');
    } catch (error: any) {
      setStatus('error');
      setErrorMessage(error.message || 'Failed to submit donation. Please try again.');
    }
  };

  const resetForm = () => {
    setStatus('idle');
    setStep(1);
    setWants80g(false);
    setErrorMessage('');
    setFormData({
      amount: 1000,
      name: '',
      email: '',
      phone: '',
      city: '',
      wants80g: false,
      pan: '',
      address: '',
      pin: '',
      state: ''
    });
  };

  return (
    <div className="bg-surface min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-xl overflow-hidden">

        {/* Header */}
        <div className="bg-gradient-to-r from-primary to-secondary px-8 py-6">
          <h1 className="text-2xl font-bold text-white flex items-center">
            <CreditCard className="mr-3" /> Make a Donation
          </h1>
          <p className="text-blue-100 mt-1">Your contribution brings hope.</p>
        </div>

        <div className="p-8">

          {/* SUCCESS SCREEN */}
          {status === 'success' ? (
            <div className="text-center py-12">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h2>
              <p className="text-gray-600 mb-6">
                Your donation details have been submitted successfully.
                We will verify the transaction and send you a receipt shortly.
              </p>
              <button
                onClick={resetForm}
                className="px-6 py-2 bg-primary text-white rounded hover:bg-secondary transition"
              >
                Donate Again
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>

              {/* STEP 1: Amount */}
              {step === 1 && (
                <>
                  <h2 className="text-xl font-bold mb-6">Enter Amount (INR)</h2>
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    {amounts.map((amt) => (
                      <button
                        key={amt}
                        type="button"
                        onClick={() => setFormData({ ...formData, amount: amt })}
                        className={`py-2 px-4 rounded border ${
                          formData.amount === amt
                            ? 'bg-secondary text-white'
                            : 'bg-white'
                        }`}
                      >
                        ₹{amt}
                      </button>
                    ))}
                  </div>
                  <input
                    type="number"
                    min="1"
                    value={formData.amount}
                    onChange={(e) =>
                      setFormData({ ...formData, amount: Number(e.target.value) })
                    }
                    className="w-full border rounded p-3"
                  />
                </>
              )}

              {/* STEP 2: Bank */}
              {step === 2 && (
                <div className="text-center">
                  <h2 className="text-xl font-bold mb-6">Bank Transfer Details</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                    <div className="flex flex-col items-center">
                      <img src={assetPath('/qr-code.png')} alt="UPI QR" className="w-80 h-80" />
                      <p className="mt-2 text-sm text-gray-600">Scan to Pay via UPI</p>
                    </div>
                    <div className="bg-blue-50 rounded-lg p-6 text-left">
                      <div className="mb-4">
                        <p className="text-sm text-gray-600">Account Name</p>
                        <p className="font-semibold text-gray-900">SANKALP FOUNDATION (SARVAJANA SUKINO BAVA NTHU)</p>
                      </div>
                      <div className="mb-4">
                        <p className="text-sm text-gray-600">Account Number</p>
                        <p className="font-semibold text-gray-900">44970408304</p>
                      </div>
                      <div className="mb-4">
                        <p className="text-sm text-gray-600">Branch Name</p>
                        <p className="font-semibold text-gray-900">SANATHNAGAR</p>
                      </div>
                      <div className="mb-4">
                        <p className="text-sm text-gray-600">Branch IFSC</p>
                        <p className="font-semibold text-gray-900">SBIN0017358</p>
                      </div>
                      <div className="mb-4">
                        <p className="text-sm text-gray-600">Branch Address</p>
                        <p className="font-semibold text-gray-900">PLOT NO D-50(PART) SANATHNAGAR HYDERABAD</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 3: Details + 80G */}
              {step === 3 && (
                <>
                  <h2 className="text-xl font-bold mb-6">Your Details</h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <input required type="text" placeholder="Full Name *" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="border rounded p-3" />
                    <input required type="email" placeholder="Email *" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="border rounded p-3" />
                    <input required type="tel" placeholder="Phone *" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="border rounded p-3" />
                    <input required type="text" placeholder="City *" value={formData.city} onChange={(e) => setFormData({ ...formData, city: e.target.value })} className="border rounded p-3" />
                  </div>

                  {/* 80G Checkbox */}
                  <div className="mb-6 p-4 border rounded-lg bg-blue-50">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        checked={wants80g}
                        onChange={handle80gChange}
                        className="mr-3 w-5 h-5"
                      />
                      <span className="font-medium">I would like to receive 80(G) Certificate</span>
                    </label>
                  </div>

                  {wants80g && (
                    <div className="space-y-4 mb-6 p-4 border rounded-lg bg-gray-50">
                      <p className="text-sm text-gray-600">To get the 80-G certificate, please enter your PAN number</p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                          required={wants80g}
                          type="text"
                          placeholder="PAN Card No. *"
                          value={formData.pan}
                          onChange={(e) => setFormData({ ...formData, pan: e.target.value.toUpperCase() })}
                          maxLength={10}
                          className="border rounded p-3 uppercase"
                        />
                        <input
                          type="text"
                          placeholder="Address"
                          value={formData.address}
                          onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                          className="border rounded p-3"
                        />
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <input
                          type="text"
                          placeholder="Pin Code"
                          value={formData.pin}
                          onChange={(e) => setFormData({ ...formData, pin: e.target.value })}
                          className="border rounded p-3"
                        />
                        <input
                          type="text"
                          placeholder="State"
                          value={formData.state}
                          onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                          className="border rounded p-3"
                        />
                      </div>
                    </div>
                  )}

                  {status === 'error' && (
                    <div className="p-4 bg-red-50 text-red-700 rounded-md flex items-start mb-4">
                      <AlertCircle className="w-5 h-5 mr-2 mt-0.5" />
                      <span>{errorMessage}</span>
                    </div>
                  )}
                </>
              )}

              {/* Navigation */}
              <div className="mt-8 flex justify-between">
                {step > 1 && (
                  <button type="button" onClick={handleBack} className="px-6 py-2 border rounded">
                    Back
                  </button>
                )}
                {step < 3 ? (
                  <button type="button" onClick={handleNext} className="ml-auto px-6 py-2 bg-secondary text-white rounded">
                    Next
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="ml-auto px-8 py-2 bg-primary text-white rounded flex items-center disabled:opacity-50"
                  >
                    {status === 'loading' && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
                    Submit Donation
                  </button>
                )}
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Donate;
