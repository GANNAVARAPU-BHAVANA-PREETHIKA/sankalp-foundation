import React from 'react';
import { FileText, Shield, Award, BarChart3, Leaf, AlertTriangle, Zap, PieChart as PieIcon, Handshake, LogOut } from 'lucide-react';

const Transparency: React.FC = () => {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-primary mb-12 text-center">Transparency & Compliance</h1>
        
        <div className="space-y-16">
          {/* Section 1: Monitoring & Evaluation */}
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/4 flex justify-center pt-2">
              <BarChart3 className="w-16 h-16 text-secondary" />
            </div>
            <div className="md:w-3/4">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Monitoring & Evaluation Framework</h2>
              <p className="text-gray-600 mb-4">
                We ensure rigorous tracking of our progress and impact through a multi-layered framework.
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-600">
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-secondary rounded-full"></div> Baseline and endline assessments</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-secondary rounded-full"></div> Quarterly progress tracking</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-secondary rounded-full"></div> Outcome and impact indicators aligned with SDGs</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-secondary rounded-full"></div> Social audits and community feedback</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-secondary rounded-full"></div> Digital MIS for real-time monitoring</li>
              </ul>
            </div>
          </div>

          <hr className="border-gray-100" />

          {/* Section 2: Sustainability & Risk */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3 mb-2">
                <Leaf className="w-8 h-8 text-green-600" />
                <h2 className="text-2xl font-bold text-gray-900">Sustainability Strategy</h2>
              </div>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• Community ownership through SHGs and local committees</li>
                <li>• Capacity building for long-term self-management</li>
                <li>• Convergence with government schemes</li>
                <li>• Revenue-generating livelihood models</li>
                <li>• Public-private partnerships</li>
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3 mb-2">
                <AlertTriangle className="w-8 h-8 text-orange-600" />
                <h2 className="text-2xl font-bold text-gray-900">Risk Mitigation Plan</h2>
              </div>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• Regular stakeholder consultations</li>
                <li>• Diversified livelihood support to reduce dependency</li>
                <li>• Climate-resilient agricultural practices</li>
                <li>• Strong financial monitoring systems</li>
              </ul>
            </div>
          </div>

          <hr className="border-gray-100" />

          {/* Section 3: Innovation & Partnership */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3 mb-2">
                <Zap className="w-8 h-8 text-yellow-500" />
                <h2 className="text-2xl font-bold text-gray-900">Innovation Component</h2>
              </div>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• Use of digital platforms for training and monitoring</li>
                <li>• Integration of climate-resilient technologies</li>
                <li>• Community-led planning and decision-making models</li>
                <li>• Market linkage through e-commerce and local networks</li>
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3 mb-2">
                <Handshake className="w-8 h-8 text-blue-600" />
                <h2 className="text-2xl font-bold text-gray-900">Partnership Model</h2>
              </div>
              <p className="text-sm text-gray-600">SANKALP FOUNDATION collaborates with:</p>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• Government departments</li>
                <li>• CSR partners and donors</li>
                <li>• Local NGOs and CBOs</li>
                <li>• Academic institutions & Private sector companies</li>
              </ul>
            </div>
          </div>

          <hr className="border-gray-100" />

          {/* Section 4: Budget & Exit */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3 mb-2">
                <PieIcon className="w-8 h-8 text-primary" />
                <h2 className="text-2xl font-bold text-gray-900">Budget Overview</h2>
              </div>
              <p className="text-sm text-gray-600">Our indicative budget structure covers:</p>
              <div className="grid grid-cols-2 gap-2 text-xs font-medium">
                <div className="bg-surface p-2 rounded border">Program Activities</div>
                <div className="bg-surface p-2 rounded border">Capacity Building</div>
                <div className="bg-surface p-2 rounded border">Infrastructure Support</div>
                <div className="bg-surface p-2 rounded border">Human Resources</div>
                <div className="bg-surface p-2 rounded border">Monitoring & Evaluation</div>
                <div className="bg-surface p-2 rounded border">Administrative Costs</div>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3 mb-2">
                <LogOut className="w-8 h-8 text-red-600" />
                <h2 className="text-2xl font-bold text-gray-900">Exit Strategy</h2>
              </div>
              <p className="text-sm text-gray-600">Gradual withdrawal through:</p>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• Strengthened community institutions</li>
                <li>• Established revenue streams</li>
                <li>• Linkages with government and financial institutions</li>
                <li>• Trained local leadership</li>
              </ul>
            </div>
          </div>

          <hr className="border-gray-100" />

          {/* Section 5: Governance */}
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-1/4 flex justify-center pt-2">
              <Shield className="w-16 h-16 text-secondary" />
            </div>
            <div className="md:w-3/4">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Governance & Policies</h2>
              <p className="text-gray-600 mb-4">
                We adhere to the highest standards of governance. Our Child Protection Policy, Whistleblower Policy, and Sexual Harassment Prevention Policy ensure a safe working environment for all.
              </p>
              <ul className="list-disc pl-5 text-gray-600 space-y-2">
                <li>Strict adherence to KYC norms for all donors.</li>
                <li>Quarterly board meetings with published minutes.</li>
                <li>External statutory audits conducted annually.</li>
              </ul>
            </div>
          </div>

          <hr className="border-gray-100" />

          {/* Section 6: Accreditations */}
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-1/4 flex justify-center pt-2">
              <Award className="w-16 h-16 text-secondary" />
            </div>
            <div className="md:w-3/4">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Accreditations & Awards</h2>
              <p className="text-gray-600 mb-4">
                Recognized for our commitment to social welfare.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 border rounded bg-surface">
                  <h4 className="font-bold text-primary">Guidestar India</h4>
                  <p className="text-xs">Platinum Certified (2023)</p>
                </div>
                <div className="p-4 border rounded bg-surface">
                  <h4 className="font-bold text-primary">GiveIndia</h4>
                  <p className="text-xs">Trusted Partner</p>
                </div>
              </div>
            </div>
          </div>

          <hr className="border-gray-100" />

          {/* Section 7: Financial Documents */}
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-1/4 flex justify-center pt-2">
              <FileText className="w-16 h-16 text-secondary" />
            </div>
            <div className="md:w-3/4">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Financial Documents</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full text-sm text-left text-gray-500">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                    <tr>
                      <th className="px-6 py-3">Document</th>
                      <th className="px-6 py-3">Period</th>
                      <th className="px-6 py-3">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white border-b">
                      <td className="px-6 py-4 font-medium text-gray-900">CSR Certificate</td>
                      <td className="px-6 py-4">FY 2026-27</td>
                      <td className="px-6 py-4"><a href="/CSR-CERTIFICATE-sankalp.pdf" className="text-secondary hover:underline" target="_blank" rel="noopener noreferrer">Download</a></td>
                    </tr>
                    <tr className="bg-white border-b">
                      <td className="px-6 py-4 font-medium text-gray-900">Form 10AC(Reg.)</td>
                      <td className="px-6 py-4">FY 2026-27</td>
                      <td className="px-6 py-4"><a href="/Form-10AC.pdf" className="text-secondary hover:underline" target="_blank" rel="noopener noreferrer">Download</a></td>
                    </tr>
                    <tr className="bg-white border-b">
                      <td className="px-6 py-4 font-medium text-gray-900">Form 10AC(Appro.)</td>
                      <td className="px-6 py-4">FY 2026-27</td>
                      <td className="px-6 py-4"><a href="/Form-10Ac-app.pdf" className="text-secondary hover:underline" target="_blank" rel="noopener noreferrer">Download</a></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transparency;
