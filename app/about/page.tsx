'use client'

import { Linkedin, Github } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function About() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="mb-6 flex justify-center">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 p-1">
              <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
                <span className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  GP
                </span>
              </div>
            </div>
          </div>
          <h1 className="text-5xl font-bold text-white mb-2">Gustavo Padovan</h1>
          <p className="text-xl text-gray-300">
            Desenvolvedor Python & Data Science
          </p>
        </div>

        {/* Main Content */}
        <div className="space-y-12">
          {/* Bio Section */}
          <section className="bg-gray-800/50 backdrop-blur border border-gray-700 rounded-xl p-8">
            <h2 className="text-3xl font-bold text-white mb-6">Quem Sou Eu</h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                Sou Gustavo Padovan, formado em Administração pela FEA-USP e especializado em Data Analytics pela Ironhack. 
                Tenho paixão por transformar dados complexos em soluções práticas e escaláveis utilizando Python.
              </p>
              <p>
                Busco uma posição como desenvolvedor Junior em Python e Data Science, onde possa aplicar meus conhecimentos 
                e contribuir para projetos desafiadores. Possuo experiência prática através de diversos projetos pessoais 
                que demonstram minha capacidade em web scraping, análise de dados, machine learning e desenvolvimento backend.
              </p>
              <p>
                Sou um aprendiz contínuo, sempre buscando estar atualizado com as últimas tendências em tecnologia e 
                metodologias ágeis. Meu portfólio de projetos reflete meu comprometimento com a excelência e inovação.
              </p>
            </div>
          </section>

          {/* Experience Section */}
          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-white">Experiência & Projetos</h2>
            
            {[
              {
                title: 'Boticário Web Scraper',
                company: 'Projeto Pessoal',
                period: '2025',
                description: 'Web scraper para coleta de dados de produtos Boticário. Extrai informações de perfumes e cosméticos com armazenamento em banco de dados SQLite.',
              },
              {
                title: 'Amazon Ads Py',
                company: 'Projeto Pessoal',
                period: '2024',
                description: 'Gerador de relatórios de campanhas publicitárias usando Amazon REST API V3. Automatiza coleta e análise de dados de anúncios.',
              },
              {
                title: 'CTG Indicator',
                company: 'Projeto Pessoal',
                period: '2024',
                description: 'Indicador técnico de análise para trading. Implementa análise Crypto to Gold com interpolação de dados e visualizações.',
              },
              {
                title: 'PSK Website',
                company: 'Projeto Pessoal',
                period: '2023',
                description: 'Marketplace website para produtos automotivos. Plataforma de e-commerce com Django, PostgreSQL e sistema de pagamento integrado.',
              },
              {
                title: 'KDP Rocket & KDSpy',
                company: 'Projeto Pessoal',
                period: '2021',
                description: 'Ferramentas de análise de palavras-chave Amazon KDP com automação de interface, web scraping e processamento avançado de dados.',
              },
              {
                title: 'Data Analysis & ML Projects',
                company: 'Ironhack & Pessoais',
                period: '2019 - 2021',
                description: 'Diversos projetos de análise de dados e machine learning, incluindo web scraping, análise exploratória e desenvolvimento de modelos preditivos.',
              },
            ].map((exp, idx) => (
              <div
                key={idx}
                className="bg-gray-800/50 backdrop-blur border border-gray-700 rounded-xl p-6 hover:border-purple-500 transition-colors"
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                  <span className="text-sm text-purple-400">{exp.period}</span>
                </div>
                <p className="text-gray-400 mb-3">{exp.company}</p>
                <p className="text-gray-300">{exp.description}</p>
              </div>
            ))}
          </section>

          {/* Education Section */}
          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-white">Educação</h2>
            
            {[
              {
                degree: 'Bootcamp Data Analytics',
                institution: 'Ironhack - São Paulo',
                year: '2019',
              },
              {
                degree: 'Bacharelado em Administração',
                institution: 'FEA-USP (Faculdade de Economia, Administração e Contabilidade)',
                year: '2010',
              },
            ].map((edu, idx) => (
              <div
                key={idx}
                className="bg-gray-800/50 backdrop-blur border border-gray-700 rounded-xl p-6"
              >
                <h3 className="text-lg font-bold text-white mb-1">{edu.degree}</h3>
                <p className="text-gray-400 mb-2">{edu.institution}</p>
                <p className="text-sm text-purple-400">{edu.year}</p>
              </div>
            ))}
          </section>

          {/* Contact Section */}
          <section className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-purple-500/30 rounded-xl p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Vamos Trabalhar Juntos?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Estou buscando uma posição como desenvolvedor Junior em Python e Data Science. 
              Estou aberto a novas oportunidades e desafios. Entre em contato comigo para discutir como posso contribuir para seu projeto.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                asChild
              >
                <a href="https://www.linkedin.com/in/gbpadovan" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5 mr-2" />
                  LinkedIn Profile
                </a>
              </Button>
            </div>

            <div className="flex gap-6 justify-center mt-8">
              <a
                href="https://github.com/gbpadovan"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-400 transition-colors"
                title="GitHub"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/gbpadovan"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-400 transition-colors"
                title="LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}
