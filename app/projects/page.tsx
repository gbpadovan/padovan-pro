'use client'

import { useState } from 'react'
import { Github, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface Project {
  id: number
  title: string
  description: string
  tags: string[]
  image: string
  github: string
  demo: string
  category: 'python' | 'outros'
}

const projectsByYear: Record<string, Project[]> = {
  '2019': [
    {
      id: 1,
      title: 'Ironhack Data Analyst Classes',
      description: 'Material e projetos do bootcamp Ironhack de Data Analyst em São Paulo. Inclui análises, visualizações e estudos de caso práticos.',
      tags: ['Python', 'Pandas', 'Data Analysis', 'Jupyter'],
      image: 'bg-gradient-to-br from-blue-500 to-blue-600',
      github: 'https://github.com/gbpadovan/ironhack2019SAODataAnalystClasses',
      demo: '',
      category: 'python',
    },
    {
      id: 2,
      title: 'Data Analysis & Machine Learning',
      description: 'Projetos de análise de dados e machine learning com aplicações práticas em datasets reais.',
      tags: ['Python', 'Scikit-learn', 'Pandas', 'ML'],
      image: 'bg-gradient-to-br from-purple-500 to-purple-600',
      github: 'https://github.com/gbpadovan/Data-Analysis-ML',
      demo: '',
      category: 'python',
    },
  ],
  '2021': [
    {
      id: 3,
      title: 'KDP Rocket',
      description: 'Coletor automático de keywords para Amazon KDP. Automatiza a coleta de dados de palavras-chave usando web scraping e análise.',
      tags: ['Python', 'Selenium', 'Web Scraping', 'Automation'],
      image: 'bg-gradient-to-br from-green-500 to-green-600',
      github: 'https://github.com/gbpadovan/kdprocket',
      demo: '',
      category: 'python',
    },
    {
      id: 4,
      title: 'KDSpy',
      description: 'Ferramenta de análise de palavras-chave Amazon KDP com arquitetura robusta e processamento de dados avançado.',
      tags: ['Python', 'Selenium', 'Data Analysis', 'KDP'],
      image: 'bg-gradient-to-br from-pink-500 to-pink-600',
      github: 'https://github.com/gbpadovan/kdspy',
      demo: '',
      category: 'python',
    },
    {
      id: 5,
      title: 'Face Generator Web Scrapping',
      description: 'Sistema de web scraping para coleta e processamento de imagens de faces com geração automática de datasets.',
      tags: ['Python', 'BeautifulSoup', 'Web Scraping', 'Image Processing'],
      image: 'bg-gradient-to-br from-orange-500 to-orange-600',
      github: 'https://github.com/gbpadovan/face-generator-web-scrapping',
      demo: '',
      category: 'python',
    },
  ],
  '2022': [
    {
      id: 6,
      title: 'SGD Accountability',
      description: 'Ferramenta de análise de dados de accountability para SGD Digital Tools. Inclui análise de campanhas Kindle, áudio e despesas de anúncios.',
      tags: ['Python', 'Jupyter', 'Data Analysis', 'Pandas'],
      image: 'bg-gradient-to-br from-indigo-500 to-indigo-600',
      github: 'https://github.com/gbpadovan/sgd-accountability',
      demo: '',
      category: 'python',
    },
  ],
  '2023': [
    {
      id: 7,
      title: 'PSK Website',
      description: 'Marketplace website para produtos automotivos. Plataforma de e-commerce com integração de banco de dados e sistema de pagamento.',
      tags: ['Django', 'PostgreSQL', 'Web Development', 'E-commerce'],
      image: 'bg-gradient-to-br from-cyan-500 to-cyan-600',
      github: 'https://github.com/gbpadovan/pskweb',
      demo: '',
      category: 'python',
    },
    {
      id: 11,
      title: 'Smart Contract Lottery',
      description: 'Contrato inteligente de loteria desenvolvido em Solidity. Implementa lógica de sorteio segura e transparente na blockchain.',
      tags: ['Solidity', 'Smart Contracts', 'Blockchain', 'Ethereum'],
      image: 'bg-gradient-to-br from-amber-500 to-amber-600',
      github: 'https://github.com/gbpadovan/smartcontract-lottery',
      demo: '',
      category: 'outros',
    },
    {
      id: 12,
      title: 'Brownie Fund Me',
      description: 'Projeto de crowdfunding descentralizado usando Solidity e Brownie. Demonstra interação com contratos inteligentes e web3.',
      tags: ['Solidity', 'Brownie', 'Web3', 'Smart Contracts'],
      image: 'bg-gradient-to-br from-violet-500 to-violet-600',
      github: 'https://github.com/gbpadovan/brownie_fund_me',
      demo: '',
      category: 'outros',
    },
  ],
  '2024': [
    {
      id: 8,
      title: 'CTG Indicator',
      description: 'Indicador técnico de análise para trading. Implementa análise Crypto to Gold com interpolação de dados e visualizações.',
      tags: ['Python', 'Trading', 'Technical Analysis', 'Data Science'],
      image: 'bg-gradient-to-br from-yellow-500 to-yellow-600',
      github: 'https://github.com/gbpadovan/ctg_indicator',
      demo: '',
      category: 'python',
    },
    {
      id: 9,
      title: 'Amazon Ads Py',
      description: 'Gerador de relatórios de campanhas publicitárias usando Amazon REST API V3. Automatiza coleta e análise de dados de anúncios.',
      tags: ['Python', 'REST API', 'Amazon Ads', 'Automation'],
      image: 'bg-gradient-to-br from-red-500 to-red-600',
      github: 'https://github.com/gbpadovan/amz_ads_py',
      demo: '',
      category: 'python',
    },
  ],
  '2025': [
    {
      id: 10,
      title: 'Boticário Web Scraper',
      description: 'Web scraper para coleta de dados de produtos Boticário. Extrai informações de perfumes e cosméticos com armazenamento em banco de dados.',
      tags: ['Python', 'Selenium', 'Web Scraping', 'SQLite'],
      image: 'bg-gradient-to-br from-rose-500 to-rose-600',
      github: 'https://github.com/gbpadovan/perfumews',
      demo: '',
      category: 'python',
    },
  ],
  '2025-2026': [
    {
      id: 13,
      title: 'MatchGenius',
      description: 'Assistente de IA para ajudar homens a atrair mulheres online com geração de mensagens personalizadas. Plataforma SaaS com análise de sucesso e otimização de perfil.',
      tags: ['React', 'Next.js', 'Supabase', 'Shadcn', 'AI', 'Vibe-Coding'],
      image: 'bg-gradient-to-br from-pink-500 to-red-600',
      github: '',
      demo: 'https://www.matchgenius.app',
      category: 'outros',
    },
  ],
}

export default function Projects() {
  const [filter, setFilter] = useState<'all' | 'python' | 'outros'>('all')
  const years = Object.keys(projectsByYear).sort().reverse()

  const filterProjects = (projects: Project[]) => {
    if (filter === 'all') return projects
    return projects.filter(p => p.category === filter)
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="mb-16">
          <h1 className="text-5xl font-bold text-white mb-4">Meus Projetos</h1>
          <p className="text-xl text-gray-300 mb-8">
            Uma seleção dos meus melhores trabalhos em Python, Data Science, desenvolvimento backend e outros projetos.
          </p>
          
          <div className="flex gap-4 flex-wrap">
            <Button
              onClick={() => setFilter('all')}
              className={`${
                filter === 'all'
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600'
                  : 'bg-gray-700 hover:bg-gray-600'
              }`}
            >
              Todos
            </Button>
            <Button
              onClick={() => setFilter('python')}
              className={`${
                filter === 'python'
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600'
                  : 'bg-gray-700 hover:bg-gray-600'
              }`}
            >
              Projetos Python
            </Button>
            <Button
              onClick={() => setFilter('outros')}
              className={`${
                filter === 'outros'
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600'
                  : 'bg-gray-700 hover:bg-gray-600'
              }`}
            >
              Outros Projetos
            </Button>
          </div>
        </div>

        {years.map((year) => {
          const filteredProjects = filterProjects(projectsByYear[year as keyof typeof projectsByYear])
          if (filteredProjects.length === 0) return null
          
          return (
          <div key={year} className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 pb-4 border-b border-gray-700">
              {year}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="group bg-gray-800/50 backdrop-blur border border-gray-700 rounded-xl overflow-hidden hover:border-purple-500 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10"
                >
                  <div className={`h-48 ${project.image} relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                  </div>

                  <div className="p-6 space-y-4">
                    <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full border border-purple-500/30"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-3 pt-4">
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 border-gray-600 text-gray-300 hover:bg-gray-700/50"
                        asChild
                      >
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-2" />
                          Código
                        </a>
                      </Button>
                      {project.demo && (
                        <Button
                          size="sm"
                          className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                          asChild
                        >
                          <a href={project.demo} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Demo
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )
        })}
      </div>
    </main>
  )
}
