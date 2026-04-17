'use client'

import Link from 'next/link'
import { ArrowRight, Code2, Database, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="pt-20 pb-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
                  Desenvolvedor
                  <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Python & Data Science
                  </span>
                </h1>
                <p className="text-xl text-gray-300 leading-relaxed">
                  Transformo dados em insights valiosos. Especializado em machine learning, análise de dados e desenvolvimento backend com Python.
                </p>
              </div>

              <div className="flex gap-4">
                <Link href="/projects">
                  <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                    Ver Projetos
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/about">
                  <Button size="lg" variant="outline" className="border-gray-400 text-black hover:bg-white/10">
                    Saiba Mais
                  </Button>
                </Link>
              </div>

              <div className="flex gap-8 pt-4">
                <div>
                  <p className="text-3xl font-bold text-white">10+</p>
                  <p className="text-gray-400">Projetos Desenvolvidos</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-white">FEA-USP</p>
                  <p className="text-gray-400">Administração</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-white">Ironhack</p>
                  <p className="text-gray-400">Data Analytics</p>
                </div>
              </div>
            </div>

            <div className="relative h-96 md:h-full">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl opacity-20 blur-3xl"></div>
              <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 h-full flex flex-col justify-center">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Code2 className="h-8 w-8 text-blue-400 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-white">Backend Development</h3>
                      <p className="text-gray-400">Python, FastAPI, Django, Flask</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Database className="h-8 w-8 text-purple-400 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-white">Data Science</h3>
                      <p className="text-gray-400">ML, Pandas, Scikit-learn, TensorFlow</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Zap className="h-8 w-8 text-yellow-400 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-white">Performance</h3>
                      <p className="text-gray-400">Otimização, escalabilidade, arquitetura</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-20 border-t border-gray-700">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Tecnologias & Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'Python' },
              { name: 'Machine Learning' },
              { name: 'Data Analysis' },
              { name: 'Django' },
              { name: 'PostgreSQL' },
              { name: 'Pandas' },
              { name: 'Numpy' },
              { name: 'Git' },
            ].map((skill) => (
              <div key={skill.name} className="bg-gray-800/50 backdrop-blur border border-gray-700 rounded-lg p-6 hover:border-purple-500 transition-colors">
                <h3 className="text-white font-semibold">{skill.name}</h3>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
