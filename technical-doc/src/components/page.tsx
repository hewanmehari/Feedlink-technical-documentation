"use client";


import Overview from '@/components/Overview';
import Features from '@/components/Features';
import ProjectSetup from '@/components/Tech-stack';
import System from '@/components/System';
import Database from '@/components/Database';
import Api from '@/components/Api';
import Deployment from '@/components/Deployment';
import Security from '@/components/Security';
import Testing from '@/components/Testing';
import Sidebar from '@/components/shared-component/Sidebar';
import CodeStructurePage from './code-structure';
import CodeStandardsPage from './Code Standards';



export default function HomePage() {


  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="ml-72 p-8 w-full bg-gray-50 overflow-y-auto">
        <section id="overview" className="mb-16 scroll-mt-24">
          <Overview />
        </section>
        
        <section id="features" className="mb-16 scroll-mt-24">
          <Features />
        </section>
        
     
        
        <section id="system" className="mb-16 scroll-mt-24">
          <System />
        </section>
        
        <section id="database" className="mb-16 scroll-mt-24">
          <Database />
        </section>
        
        <section id="api" className="mb-16 scroll-mt-24">
          <Api />
        </section>
       
        <section id="code standards" className="mb-16 scroll-mt-24">
          <CodeStandardsPage/>
        </section>
        <section id="project-setup" className="mb-16 scroll-mt-24">
          <ProjectSetup />
        </section>
        
        <section id="code-structure" className="mb-16 scroll-mt-24">
          <CodeStructurePage />
        </section>

        <section id="deployment" className="mb-16 scroll-mt-24">
          <Deployment />
        </section>
        
        <section id="security" className="mb-16 scroll-mt-24">
          <Security />
        </section>
        
        <section id="testing" className="mb-16 scroll-mt-24">
          <Testing />
        </section>
       
      </main>
    </div>
  );
}