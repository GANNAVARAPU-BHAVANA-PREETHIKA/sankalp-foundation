import React, { useState } from 'react';
import { postData } from '../services/api';
import { FetchStatus } from '../types';
import { Loader2, CheckCircle, AlertCircle } from 'lucide-react';

type Tab = 'volunteer' | 'partner' | 'fundraise';

const GetInvolved: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>('volunteer');
  const [status, setStatus] = useState<FetchStatus>('idle');
  const [formData, setFormData] = useState<any>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      await postData(`/api/${activeTab}`, formData);
      setStatus('success');
    } catch (err) {
      setStatus('error');
    }
  };

  const renderForm = () => {
    if (status === 'success') {
      return (
        <div className="text-center py-12">
          <CheckCircle className="w-16 h-16 text-success mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-gray-800">Thank You!</h3>
          <p className="text-gray-600 mt-2">We have received your interest. Our team will contact you shortly.</p>
          <button onClick={() => setStatus('idle')} className="mt-6 text-primary underline">Submit another form</button>
        </div>
      );
    }

    return (
      <form onSubmit={handleSubmit} className="space-y-6 max-w-lg mx-auto">
        <div className="grid grid-cols-1 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Full Name</label>
            <input required name="name" onChange={handleInputChange} type="text" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-primary focus:border-primary" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email Address</label>
            <input required name="email" onChange={handleInputChange} type="email" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-primary focus:border-primary" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Phone Number</label>
            <input required name="phone" onChange={handleInputChange} type="tel" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-primary focus:border-primary" />
          </div>
          
          {activeTab === 'volunteer' && (
             <div>
               <label className="block text-sm font-medium text-gray-700">Area of Interest</label>
               <select name="interest" onChange={handleInputChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-primary focus:border-primary">
                 <option>Teaching</option>
                 <option>Medical Camps</option>
                 <option>Event Management</option>
                 <option>Social Media</option>
               </select>
             </div>
          )}

          {activeTab === 'partner' && (
             <div>
               <label className="block text-sm font-medium text-gray-700">Organization Name</label>
               <input required name="orgName" onChange={handleInputChange} type="text" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-primary focus:border-primary" />
             </div>
          )}
          
          <div>
            <label className="block text-sm font-medium text-gray-700">Message / Note</label>
            <textarea name="message" onChange={handleInputChange} rows={4} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-primary focus:border-primary"></textarea>
          </div>
        </div>

        {status === 'error' && (
          <div className="p-4 bg-red-50 text-red-700 rounded-md flex items-center">
            <AlertCircle className="w-5 h-5 mr-2" />
            <span>Submission failed. Please try again.</span>
          </div>
        )}

        <button 
          type="submit" 
          disabled={status === 'loading'}
          className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-secondary hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-50"
        >
          {status === 'loading' ? <Loader2 className="animate-spin w-5 h-5" /> : 'Submit Request'}
        </button>
      </form>
    );
  };

  return (
    <div className="bg-white min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-primary mb-4">Get Involved</h1>
        <p className="text-center text-gray-600 mb-12">
          Join hands with SANKALP to create a ripple of change. Choose how you would like to contribute.
        </p>

        <div className="flex flex-wrap justify-center border-b border-gray-200 mb-10">
          {(['volunteer', 'partner', 'fundraise'] as Tab[]).map((tab) => (
            <button
              key={tab}
              onClick={() => { setActiveTab(tab); setStatus('idle'); }}
              className={`px-8 py-4 font-medium text-sm sm:text-base capitalize border-b-2 transition-colors ${
                activeTab === tab 
                  ? 'border-primary text-primary' 
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              {tab === 'partner' ? 'CSR Partnership' : tab}
            </button>
          ))}
        </div>

        <div className="bg-surface p-8 rounded-xl shadow-sm">
           <h2 className="text-2xl font-bold text-center mb-8 capitalize">
             {activeTab === 'volunteer' && 'Become a Volunteer'}
             {activeTab === 'partner' && 'Corporate Partnership (CSR)'}
             {activeTab === 'fundraise' && 'Start a Fundraiser'}
           </h2>
           {renderForm()}
        </div>
      </div>
    </div>
  );
};

export default GetInvolved;
