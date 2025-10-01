"use client";


import Overview from '@/components/Overview';
import Features from '@/components/Features';
import TechStack from '@/components/Tech-stack';
import System from '@/components/System';
import Database from '@/components/Database';
import Api from '@/components/Api';
import Deployment from '@/components/Deployment';
import Security from '@/components/Security';
import Testing from '@/components/Testing';
import Sidebar from '@/components/shared-component/Sidebar';


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
        
        <section id="tech-stack" className="mb-16 scroll-mt-24">
          <TechStack />
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