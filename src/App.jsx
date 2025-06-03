import React, { useState } from 'react'
import { Button } from './components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card'
import { Badge } from './components/ui/badge'
import { Input } from './components/ui/input'
import { Label } from './components/ui/label'
import { 
  TrendingUp, 
  Target, 
  BarChart3, 
  Zap, 
  Shield, 
  Users, 
  ArrowRight,
  CheckCircle,
  Star,
  Play,
  Menu,
  X,
  Calculator,
  DollarSign,
  Gauge,
  Award,
  Clock,
  Smartphone,
  Sun,
  Moon,
  ChevronDown,
  ChevronUp,
  HelpCircle,
  Building,
  Heart,
  Rocket,
  MessageCircle,
  Phone,
  LineChart,
  PieChart,
  Activity,
  Percent
} from 'lucide-react'
import './App.css'

// Componente Header
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
    document.documentElement.classList.toggle('dark')
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm border-b sticky top-0 z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold text-primary">
              Scala <span className="text-accent">Uai</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('sobre')}
              className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors"
            >
              Sobre
            </button>
            <button 
              onClick={() => scrollToSection('solucoes')}
              className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors"
            >
              Soluções
            </button>
            <button 
              onClick={() => scrollToSection('calculadora')}
              className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors"
            >
              Calculadora
            </button>
            <button 
              onClick={() => scrollToSection('precos')}
              className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors"
            >
              Preços
            </button>
            <button 
              onClick={() => scrollToSection('faq')}
              className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors"
            >
              FAQ
            </button>
            
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? (
                <Sun className="h-5 w-5 text-yellow-500" />
              ) : (
                <Moon className="h-5 w-5 text-gray-600" />
              )}
            </button>
            
            <Button 
              className="btn-accent"
              onClick={() => scrollToSection('precos')}
            >
              Começar Agora
            </Button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? (
                <Sun className="h-4 w-4 text-yellow-500" />
              ) : (
                <Moon className="h-4 w-4 text-gray-600" />
              )}
            </button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t dark:border-gray-700">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('sobre')}
                className="text-left text-gray-600 dark:text-gray-300 hover:text-primary transition-colors"
              >
                Sobre
              </button>
              <button 
                onClick={() => scrollToSection('solucoes')}
                className="text-left text-gray-600 dark:text-gray-300 hover:text-primary transition-colors"
              >
                Soluções
              </button>
              <button 
                onClick={() => scrollToSection('calculadora')}
                className="text-left text-gray-600 dark:text-gray-300 hover:text-primary transition-colors"
              >
                Calculadora
              </button>
              <button 
                onClick={() => scrollToSection('precos')}
                className="text-left text-gray-600 dark:text-gray-300 hover:text-primary transition-colors"
              >
                Preços
              </button>
              <button 
                onClick={() => scrollToSection('faq')}
                className="text-left text-gray-600 dark:text-gray-300 hover:text-primary transition-colors"
              >
                FAQ
              </button>
              <Button 
                className="btn-accent w-full"
                onClick={() => scrollToSection('precos')}
              >
                Começar Agora
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

// Componente Hero Section
const HeroSection = () => {
  return (
    <section className="gradient-hero text-white py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Badge className="bg-white/20 text-white border-white/30 mb-6">
              ✨ Para PMEs que faturam R$ 20k - R$ 5M/mês
            </Badge>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Escale Seu Negócio com{' '}
              <span className="text-accent">Tráfego Pago</span>{' '}
              Inteligente
            </h1>
            
            <p className="text-xl lg:text-2xl mb-8 text-blue-100">
              Automação de 95%, transparência total e resultados garantidos em 30 dias. 
              Especialistas em PMEs brasileiras.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="btn-accent text-lg px-8 py-4"
                onClick={() => document.getElementById('calculadora')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Calculator className="mr-2 h-5 w-5" />
                Calcular Meu ROI
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4"
                onClick={() => document.getElementById('solucoes')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Play className="mr-2 h-5 w-5" />
                Ver Soluções
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">Resultados Reais</h3>
                <p className="text-blue-100">Últimos 30 dias</p>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent">+340%</div>
                  <div className="text-sm text-blue-100">ROAS Médio</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent">R$ 2.8M</div>
                  <div className="text-sm text-blue-100">Faturamento Gerado</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent">500+</div>
                  <div className="text-sm text-blue-100">PMEs Atendidas</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent">95%</div>
                  <div className="text-sm text-blue-100">Automação</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Componente WhatsApp Float Button
const WhatsAppFloat = () => {
  const whatsappNumber = "5511999999999" // Número do WhatsApp
  const message = "Olá! Gostaria de saber mais sobre os serviços da Scala Uai 🚀"
  
  const openWhatsApp = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
    window.open(url, '_blank')
  }

  return (
    <button
      onClick={openWhatsApp}
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 animate-pulse"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
    </button>
  )
}

// Componente Sobre/Missão
const AboutSection = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300" id="sobre">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="mb-4">🎯 Nossa Missão</Badge>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 dark:text-white">
            Aumentamos a Presença Digital das{' '}
            <span className="text-primary">Empresas Brasileiras</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Nossa missão é aumentar a presença digital das empresas, atrair clientes qualificados, 
            gerar engajamento real e vender mais. Você escolhe por onde quer começar.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <Card className="text-center shadow-card hover:shadow-card-hover transition-all duration-300 dark:bg-gray-700 dark:border-gray-600">
            <CardHeader>
              <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Rocket className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="dark:text-white">Atrair Clientes</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300">
                Estratégias de tráfego pago para atrair clientes qualificados e aumentar sua base de leads.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center shadow-card hover:shadow-card-hover transition-all duration-300 dark:bg-gray-700 dark:border-gray-600">
            <CardHeader>
              <div className="mx-auto w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                <Heart className="h-8 w-8 text-accent" />
              </div>
              <CardTitle className="dark:text-white">Gerar Engajamento</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300">
                Criamos conexões autênticas entre sua marca e seus clientes através de conteúdo relevante.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center shadow-card hover:shadow-card-hover transition-all duration-300 dark:bg-gray-700 dark:border-gray-600">
            <CardHeader>
              <div className="mx-auto w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mb-4">
                <TrendingUp className="h-8 w-8 text-destructive" />
              </div>
              <CardTitle className="dark:text-white">Vender Mais</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300">
                Otimizamos seus funis de vendas para converter mais visitantes em clientes pagantes.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-green-50 dark:from-blue-900/20 dark:to-green-900/20 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4 dark:text-white">
            Atendemos Desde o Pequeno Restaurante até as Maiores Empresas
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            Nossa metodologia escalável se adapta a qualquer tamanho de negócio, 
            desde PMEs locais até grandes corporações nacionais.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">500+</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Empresas Atendidas</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent">R$ 50M+</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Faturamento Gerado</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-destructive">95%</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Taxa de Satisfação</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Componente Comparativo Competitivo
const CompetitiveSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50 dark:from-blue-900/20 dark:to-green-900/20 transition-colors duration-300" id="comparativo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="mb-4">🏆 Por Que Escolher a Scala Uai?</Badge>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 dark:text-white">
            Enquanto Agências Tradicionais Cobram{' '}
            <span className="text-destructive">R$ 1.500+/mês</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Nós oferecemos o mesmo resultado profissional a partir de{' '}
            <span className="text-accent font-bold">12x de R$ 197</span> com muito mais automação e transparência
          </p>
        </div>

        {/* Comparativo Visual */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Agências Tradicionais */}
          <Card className="shadow-card hover:shadow-card-hover transition-all duration-300 dark:bg-gray-800 dark:border-gray-700 border-2 border-red-200">
            <CardHeader className="text-center bg-red-50 dark:bg-red-900/20">
              <div className="mx-auto w-16 h-16 bg-red-100 dark:bg-red-900/40 rounded-full flex items-center justify-center mb-4">
                <Building className="h-8 w-8 text-red-600" />
              </div>
              <CardTitle className="text-red-700 dark:text-red-400">Agências Tradicionais</CardTitle>
              <div className="text-3xl font-bold text-red-600 mt-2">R$ 1.500 - R$ 5.000/mês</div>
            </CardHeader>
            <CardContent className="pt-6">
              <ul className="space-y-3">
                <li className="flex items-center text-red-600">
                  <X className="h-4 w-4 mr-3" />
                  <span className="text-sm">Gestão manual (20% automação)</span>
                </li>
                <li className="flex items-center text-red-600">
                  <X className="h-4 w-4 mr-3" />
                  <span className="text-sm">Relatórios mensais básicos</span>
                </li>
                <li className="flex items-center text-red-600">
                  <X className="h-4 w-4 mr-3" />
                  <span className="text-sm">Sem transparência em tempo real</span>
                </li>
                <li className="flex items-center text-red-600">
                  <X className="h-4 w-4 mr-3" />
                  <span className="text-sm">Foco em grandes empresas</span>
                </li>
                <li className="flex items-center text-red-600">
                  <X className="h-4 w-4 mr-3" />
                  <span className="text-sm">Resultados em 60-90 dias</span>
                </li>
                <li className="flex items-center text-red-600">
                  <X className="h-4 w-4 mr-3" />
                  <span className="text-sm">Contratos de 12 meses</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Scala Uai */}
          <Card className="shadow-card hover:shadow-card-hover transition-all duration-300 dark:bg-gray-800 dark:border-gray-700 border-2 border-green-200">
            <CardHeader className="text-center bg-green-50 dark:bg-green-900/20">
              <div className="mx-auto w-16 h-16 bg-green-100 dark:bg-green-900/40 rounded-full flex items-center justify-center mb-4">
                <Rocket className="h-8 w-8 text-green-600" />
              </div>
              <CardTitle className="text-green-700 dark:text-green-400">Scala Uai</CardTitle>
              <div className="text-3xl font-bold text-green-600 mt-2">12x de R$ 197 - R$ 397</div>
            </CardHeader>
            <CardContent className="pt-6">
              <ul className="space-y-3">
                <li className="flex items-center text-green-600">
                  <CheckCircle className="h-4 w-4 mr-3" />
                  <span className="text-sm">Automação de 95% dos processos</span>
                </li>
                <li className="flex items-center text-green-600">
                  <CheckCircle className="h-4 w-4 mr-3" />
                  <span className="text-sm">Dashboard em tempo real 24/7</span>
                </li>
                <li className="flex items-center text-green-600">
                  <CheckCircle className="h-4 w-4 mr-3" />
                  <span className="text-sm">Transparência total nos dados</span>
                </li>
                <li className="flex items-center text-green-600">
                  <CheckCircle className="h-4 w-4 mr-3" />
                  <span className="text-sm">Especialistas em PMEs</span>
                </li>
                <li className="flex items-center text-green-600">
                  <CheckCircle className="h-4 w-4 mr-3" />
                  <span className="text-sm">Resultados em 7-30 dias</span>
                </li>
                <li className="flex items-center text-green-600">
                  <CheckCircle className="h-4 w-4 mr-3" />
                  <span className="text-sm">Sem fidelidade + garantia 30 dias</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Gráficos de Performance */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <Card className="shadow-card hover:shadow-card-hover transition-all duration-300 dark:bg-gray-800 dark:border-gray-700">
            <CardHeader className="text-center">
              <div className="mx-auto w-16 h-16 bg-blue-100 dark:bg-blue-900/40 rounded-full flex items-center justify-center mb-4">
                <LineChart className="h-8 w-8 text-blue-600" />
              </div>
              <CardTitle className="dark:text-white">Crescimento de ROAS</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600 dark:text-gray-300">Mês 1</span>
                  <div className="flex items-center">
                    <div className="w-20 bg-gray-200 dark:bg-gray-700 rounded-full h-2 mr-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{width: '60%'}}></div>
                    </div>
                    <span className="text-sm font-bold">2.4x</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600 dark:text-gray-300">Mês 2</span>
                  <div className="flex items-center">
                    <div className="w-20 bg-gray-200 dark:bg-gray-700 rounded-full h-2 mr-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{width: '75%'}}></div>
                    </div>
                    <span className="text-sm font-bold">3.2x</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600 dark:text-gray-300">Mês 3+</span>
                  <div className="flex items-center">
                    <div className="w-20 bg-gray-200 dark:bg-gray-700 rounded-full h-2 mr-2">
                      <div className="bg-green-600 h-2 rounded-full" style={{width: '100%'}}></div>
                    </div>
                    <span className="text-sm font-bold text-green-600">4.2x</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card hover:shadow-card-hover transition-all duration-300 dark:bg-gray-800 dark:border-gray-700">
            <CardHeader className="text-center">
              <div className="mx-auto w-16 h-16 bg-green-100 dark:bg-green-900/40 rounded-full flex items-center justify-center mb-4">
                <Activity className="h-8 w-8 text-green-600" />
              </div>
              <CardTitle className="dark:text-white">Redução de CPA</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600 dark:text-gray-300">Início</span>
                  <div className="flex items-center">
                    <div className="w-20 bg-gray-200 dark:bg-gray-700 rounded-full h-2 mr-2">
                      <div className="bg-red-600 h-2 rounded-full" style={{width: '100%'}}></div>
                    </div>
                    <span className="text-sm font-bold">R$ 120</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600 dark:text-gray-300">30 dias</span>
                  <div className="flex items-center">
                    <div className="w-20 bg-gray-200 dark:bg-gray-700 rounded-full h-2 mr-2">
                      <div className="bg-yellow-600 h-2 rounded-full" style={{width: '70%'}}></div>
                    </div>
                    <span className="text-sm font-bold">R$ 85</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600 dark:text-gray-300">60+ dias</span>
                  <div className="flex items-center">
                    <div className="w-20 bg-gray-200 dark:bg-gray-700 rounded-full h-2 mr-2">
                      <div className="bg-green-600 h-2 rounded-full" style={{width: '45%'}}></div>
                    </div>
                    <span className="text-sm font-bold text-green-600">R$ 55</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card hover:shadow-card-hover transition-all duration-300 dark:bg-gray-800 dark:border-gray-700">
            <CardHeader className="text-center">
              <div className="mx-auto w-16 h-16 bg-purple-100 dark:bg-purple-900/40 rounded-full flex items-center justify-center mb-4">
                <Percent className="h-8 w-8 text-purple-600" />
              </div>
              <CardTitle className="dark:text-white">Taxa de Conversão</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600 dark:text-gray-300">Antes</span>
                  <div className="flex items-center">
                    <div className="w-20 bg-gray-200 dark:bg-gray-700 rounded-full h-2 mr-2">
                      <div className="bg-red-600 h-2 rounded-full" style={{width: '25%'}}></div>
                    </div>
                    <span className="text-sm font-bold">1.2%</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600 dark:text-gray-300">30 dias</span>
                  <div className="flex items-center">
                    <div className="w-20 bg-gray-200 dark:bg-gray-700 rounded-full h-2 mr-2">
                      <div className="bg-yellow-600 h-2 rounded-full" style={{width: '60%'}}></div>
                    </div>
                    <span className="text-sm font-bold">2.8%</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600 dark:text-gray-300">60+ dias</span>
                  <div className="flex items-center">
                    <div className="w-20 bg-gray-200 dark:bg-gray-700 rounded-full h-2 mr-2">
                      <div className="bg-purple-600 h-2 rounded-full" style={{width: '85%'}}></div>
                    </div>
                    <span className="text-sm font-bold text-purple-600">4.1%</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Economia Anual */}
        <div className="bg-gradient-to-r from-green-500 to-blue-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">
            💰 Economia de até R$ 42.000/ano
          </h3>
          <p className="text-xl mb-6">
            Comparado com agências tradicionais que cobram R$ 3.500/mês
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <div className="text-2xl font-bold">Agência Tradicional</div>
              <div className="text-lg opacity-90">R$ 3.500 x 12 = R$ 42.000/ano</div>
            </div>
            <div className="flex items-center justify-center">
              <ArrowRight className="h-8 w-8" />
            </div>
            <div>
              <div className="text-2xl font-bold">Scala Uai</div>
              <div className="text-lg opacity-90">R$ 297 x 12 = R$ 3.564/ano</div>
            </div>
          </div>
          <div className="mt-6 text-2xl font-bold bg-white/20 rounded-lg p-4">
            Você economiza: R$ 38.436/ano! 🎉
          </div>
        </div>
      </div>
    </section>
  )
}

// Componente ROI Calculator
const ROICalculator = () => {
  const [monthlyRevenue, setMonthlyRevenue] = useState('')
  const [adSpend, setAdSpend] = useState('')
  const [results, setResults] = useState(null)

  const calculateROI = () => {
    const revenue = parseFloat(monthlyRevenue) || 0
    const spend = parseFloat(adSpend) || 0

    if (revenue > 0 && spend > 0) {
      const currentROAS = 2.5 // ROAS médio atual do mercado
      const improvedROAS = 4.2 // ROAS com Scala Uai
      
      const currentRevenue = spend * currentROAS
      const projectedRevenue = spend * improvedROAS
      const additionalRevenue = projectedRevenue - currentRevenue
      const yearlyGain = additionalRevenue * 12

      setResults({
        currentRevenue,
        projectedRevenue,
        additionalRevenue,
        yearlyGain,
        roasImprovement: ((improvedROAS - currentROAS) / currentROAS * 100).toFixed(0)
      })
    }
  }

  const resetCalculator = () => {
    setMonthlyRevenue('')
    setAdSpend('')
    setResults(null)
  }

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300" id="calculadora">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 dark:text-white">
            Calcule o Potencial do Seu Negócio
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Descubra quanto você pode faturar a mais com nossa metodologia
          </p>
        </div>

        <Card className="shadow-card-hover dark:bg-gray-800 dark:border-gray-700">
          <CardHeader>
            <CardTitle className="flex items-center text-2xl dark:text-white">
              <Calculator className="mr-3 h-6 w-6 text-primary" />
              Calculadora de ROI
            </CardTitle>
            <CardDescription className="dark:text-gray-300">
              Insira seus dados atuais e veja a projeção de crescimento
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="revenue" className="dark:text-white">Faturamento Mensal Atual (R$)</Label>
                <Input
                  id="revenue"
                  type="number"
                  placeholder="Ex: 50000"
                  value={monthlyRevenue}
                  onChange={(e) => setMonthlyRevenue(e.target.value)}
                  className="text-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
              </div>
              <div>
                <Label htmlFor="adspend" className="dark:text-white">Investimento Mensal em Ads (R$)</Label>
                <Input
                  id="adspend"
                  type="number"
                  placeholder="Ex: 10000"
                  value={adSpend}
                  onChange={(e) => setAdSpend(e.target.value)}
                  className="text-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
              </div>
            </div>

            <div className="flex gap-4">
              <Button 
                onClick={calculateROI} 
                className="btn-accent flex-1 text-lg py-3"
                disabled={!monthlyRevenue || !adSpend}
              >
                <TrendingUp className="mr-2 h-5 w-5" />
                Calcular Potencial de Crescimento
              </Button>
              
              {results && (
                <Button 
                  onClick={resetCalculator}
                  variant="outline"
                  className="px-6 py-3 dark:border-gray-600 dark:text-gray-300"
                >
                  Limpar
                </Button>
              )}
            </div>

            {results && (
              <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-green-50 dark:from-blue-900/20 dark:to-green-900/20 rounded-lg border dark:border-gray-600">
                <h3 className="text-xl font-bold mb-4 text-center dark:text-white">
                  🚀 Seu Potencial de Crescimento
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg">
                    <div className="text-2xl font-bold text-primary">
                      R$ {results.additionalRevenue.toLocaleString('pt-BR')}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Receita adicional/mês</div>
                  </div>
                  <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg">
                    <div className="text-2xl font-bold text-accent">
                      R$ {results.yearlyGain.toLocaleString('pt-BR')}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Ganho anual projetado</div>
                  </div>
                </div>
                <div className="text-center mt-4">
                  <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                    +{results.roasImprovement}% de melhoria no ROAS
                  </Badge>
                </div>
                <div className="text-center mt-4">
                  <Button 
                    className="btn-accent"
                    onClick={() => document.getElementById('precos')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Quero Esses Resultados!
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

// Componente Solutions
const SolutionsSection = () => {
  const solutions = [
    {
      icon: <Target className="h-8 w-8" />,
      title: "Gestão de Tráfego",
      description: "Google Ads, Facebook Ads, Instagram e TikTok com automação inteligente",
      features: ["Otimização automática", "Relatórios em tempo real", "Segmentação avançada"],
      color: "border-primary"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Automação de Vendas",
      description: "CRM integrado com funis de conversão otimizados para PMEs",
      features: ["Lead scoring automático", "Nutrição personalizada", "Follow-up inteligente"],
      color: "border-accent"
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Analytics Avançado",
      description: "Dashboard completo com métricas que realmente importam",
      features: ["ROI em tempo real", "Análise de concorrentes", "Previsões de crescimento"],
      color: "border-destructive"
    }
  ]

  return (
    <section className="py-20 dark:bg-gray-800 transition-colors duration-300" id="solucoes">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="mb-4">🎯 Nossas Soluções</Badge>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 dark:text-white">
            Transforme Seu Marketing em{' '}
            <span className="text-primary">Apenas 3 Passos</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Nossa metodologia comprovada para escalar PMEs através de tráfego pago inteligente
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <Card key={index} className={`shadow-card hover:shadow-card-hover transition-all duration-300 border-t-4 ${solution.color} dark:bg-gray-700 dark:border-gray-600`}>
              <CardHeader>
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-lg bg-gray-100 dark:bg-gray-600 text-primary mr-4">
                    {solution.icon}
                  </div>
                  <div className="text-3xl font-bold text-gray-300 dark:text-gray-500">
                    0{index + 1}
                  </div>
                </div>
                <CardTitle className="text-xl dark:text-white">{solution.title}</CardTitle>
                <CardDescription className="text-base dark:text-gray-300">
                  {solution.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {solution.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-accent mr-2" />
                      <span className="text-sm dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

// Componente Pricing
const PricingSection = () => {
  const [selectedPlan, setSelectedPlan] = useState(null)

  const plans = [
    {
      name: "Starter",
      price: "197",
      description: "Ideal para empresas que faturam até R$ 100k/mês",
      features: [
        "1 plataforma de anúncios",
        "Dashboard básico",
        "Relatórios semanais",
        "Suporte via chat",
        "Taxa de gestão: 8%"
      ],
      popular: false,
      cta: "Começar Agora"
    },
    {
      name: "Business",
      price: "297",
      description: "Ideal para empresas que faturam até R$ 500k/mês",
      features: [
        "2 plataformas de anúncios",
        "Dashboard avançado",
        "Relatórios personalizados",
        "Reunião mensal",
        "Taxa de gestão: 8%"
      ],
      popular: true,
      cta: "Mais Popular"
    },
    {
      name: "Premium",
      price: "397",
      description: "Ideal para empresas que faturam acima de R$ 500k/mês",
      features: [
        "3+ plataformas de anúncios",
        "Dashboard executivo",
        "Consultoria estratégica",
        "Reunião quinzenal",
        "Taxa de gestão: 8%"
      ],
      popular: false,
      cta: "Começar Agora"
    }
  ]

  const handlePlanSelect = (planIndex) => {
    setSelectedPlan(planIndex)
    // Simular redirecionamento para checkout
    setTimeout(() => {
      alert(`Redirecionando para checkout do plano ${plans[planIndex].name}...`)
      setSelectedPlan(null)
    }, 1000)
  }

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300" id="precos">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="mb-4">💰 Planos e Preços</Badge>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 dark:text-white">
            Escolha o Plano Ideal para Seu Negócio
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Transparência total, sem surpresas. Cancele quando quiser.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card key={index} className={`shadow-card hover:shadow-card-hover transition-all duration-300 relative dark:bg-gray-800 dark:border-gray-700 ${plan.popular ? 'border-primary border-2 scale-105' : ''}`}>
              
              <CardHeader className="text-center">
                {plan.popular && (
                  <Badge className="mb-4 bg-primary text-white">
                    Mais Popular
                  </Badge>
                )}
                
                {/* PREÇO E HEADLINE EM DESTAQUE */}
                <div className="mb-6">
                  <div className="text-5xl font-bold text-primary dark:text-primary mb-2">
                    12x de R$ {plan.price}
                  </div>
                  <CardTitle className="text-3xl font-bold dark:text-white mb-3">{plan.name}</CardTitle>
                  <CardDescription className="text-lg dark:text-gray-300">
                    {plan.description}
                  </CardDescription>
                </div>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-accent mr-3" />
                      <span className="text-sm dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full ${plan.popular ? 'btn-accent' : 'btn-primary'} ${selectedPlan === index ? 'opacity-50' : ''}`}
                  size="lg"
                  onClick={() => handlePlanSelect(index)}
                  disabled={selectedPlan === index}
                >
                  {selectedPlan === index ? 'Processando...' : plan.cta}
                  {selectedPlan !== index && <ArrowRight className="ml-2 h-4 w-4" />}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            💡 Todos os planos incluem garantia de 30 dias ou seu dinheiro de volta
          </p>
          <Button 
            variant="outline" 
            size="lg"
            className="dark:border-gray-600 dark:text-gray-300"
            onClick={() => alert('Entre em contato via WhatsApp: (11) 99999-9999')}
          >
            Precisa de algo personalizado? Fale conosco
          </Button>
        </div>
      </div>
    </section>
  )
}

// Componente FAQ
const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState(null)

  const faqs = [
    {
      question: "O que é ROAS?",
      answer: "ROAS (Return on Advertising Spend) é o retorno sobre o investimento em publicidade. É calculado dividindo a receita gerada pelos anúncios pelo valor investido. Por exemplo, um ROAS de 4:1 significa que para cada R$ 1 investido, você obtém R$ 4 de retorno."
    },
    {
      question: "O que é taxa de gestão?",
      answer: "A taxa de gestão é um percentual fixo de 8% sobre o valor investido em anúncios. Esta taxa cobre toda a gestão estratégica, otimização, criação de campanhas, relatórios e suporte especializado da nossa equipe."
    },
    {
      question: "O que é uma plataforma de anúncios?",
      answer: "Plataformas de anúncios são canais digitais onde você pode veicular suas campanhas publicitárias. As principais são: Google Ads (busca e display), Facebook Ads, Instagram Ads, TikTok Ads, LinkedIn Ads e YouTube Ads. Cada plataforma tem características específicas para diferentes objetivos."
    },
    {
      question: "Qual o investimento mínimo em anúncios?",
      answer: "Recomendamos um investimento mínimo de R$ 3.000/mês em anúncios para obter resultados consistentes. Este valor permite testes adequados, otimizações e alcance suficiente para gerar dados confiáveis."
    },
    {
      question: "Em quanto tempo vejo resultados?",
      answer: "Os primeiros resultados aparecem entre 7-15 dias. Resultados consistentes e otimizados geralmente são alcançados entre 30-60 dias, quando temos dados suficientes para otimizações avançadas."
    },
    {
      question: "Vocês criam os anúncios e landing pages?",
      answer: "Sim! Criamos todos os materiais necessários: textos dos anúncios, imagens, vídeos, landing pages otimizadas para conversão e configuramos todo o tracking e análise de resultados."
    },
    {
      question: "Como funciona o relatório de resultados?",
      answer: "Você recebe relatórios detalhados com frequência definida pelo seu plano (semanal, quinzenal ou mensal). Os relatórios incluem métricas de performance, ROAS, conversões, insights e recomendações estratégicas."
    },
    {
      question: "Posso cancelar quando quiser?",
      answer: "Sim, não há fidelidade. Você pode cancelar a qualquer momento com 30 dias de antecedência. Oferecemos também garantia de 30 dias - se não ficar satisfeito, devolvemos seu investimento."
    }
  ]

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index)
  }

  return (
    <section className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="mb-4">❓ Perguntas Frequentes</Badge>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 dark:text-white">
            Tire Suas Dúvidas Sobre{' '}
            <span className="text-primary">Tráfego Pago</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Respostas para as principais dúvidas sobre nossos serviços
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Card key={index} className="shadow-card hover:shadow-card-hover transition-all duration-300 dark:bg-gray-700 dark:border-gray-600">
              <CardHeader 
                className="cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg dark:text-white">{faq.question}</CardTitle>
                  {openFAQ === index ? (
                    <ChevronUp className="h-5 w-5 text-primary" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-primary" />
                  )}
                </div>
              </CardHeader>
              {openFAQ === index && (
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </CardContent>
              )}
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Ainda tem dúvidas? Fale conosco!
          </p>
          <Button 
            className="btn-accent"
            onClick={() => {
              const whatsappNumber = "5511999999999"
              const message = "Olá! Tenho algumas dúvidas sobre os serviços da Scala Uai"
              const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
              window.open(url, '_blank')
            }}
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Falar no WhatsApp
          </Button>
        </div>
      </div>
    </section>
  )
}

// Componente Footer
const Footer = () => {
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="text-2xl font-bold mb-4">
              Scala <span className="text-accent">Uai</span>
            </div>
            <p className="text-gray-400 mb-4">
              A agência de tráfego pago que escala PMEs brasileiras com automação inteligente.
            </p>
            <div className="flex space-x-4">
              <Badge variant="outline" className="text-white border-white">
                CNPJ: 00.000.000/0001-00
              </Badge>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Soluções</h3>
            <ul className="space-y-2 text-gray-400">
              <li><button className="hover:text-white transition-colors text-left">Google Ads</button></li>
              <li><button className="hover:text-white transition-colors text-left">Facebook Ads</button></li>
              <li><button className="hover:text-white transition-colors text-left">Instagram Ads</button></li>
              <li><button className="hover:text-white transition-colors text-left">TikTok Ads</button></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Empresa</h3>
            <ul className="space-y-2 text-gray-400">
              <li><button className="hover:text-white transition-colors text-left">Sobre Nós</button></li>
              <li><button className="hover:text-white transition-colors text-left">Cases de Sucesso</button></li>
              <li><button className="hover:text-white transition-colors text-left">Carreiras</button></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Contato</h3>
            <ul className="space-y-2 text-gray-400">
              <li>📧 contato@scalauai.com.br</li>
              <li>📱 (11) 99999-9999</li>
              <li>📍 São Paulo, SP</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Scala Uai. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

// Componente Principal
function App() {
  return (
    <div className="min-h-screen transition-colors duration-300">
      <Header />
      <HeroSection />
      <AboutSection />
      <CompetitiveSection />
      <ROICalculator />
      <SolutionsSection />
      <PricingSection />
      <FAQSection />
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}

export default App

