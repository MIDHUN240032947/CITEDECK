import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Eye, EyeOff, GraduationCap, UserCircle, Shield } from 'lucide-react';
import { toast } from 'sonner@2.0.3';

export function LoginPage({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const demoAccounts = [
    {
      role: 'admin',
      email: 'admin@citedeck.com',
      password: 'admin123',
      name: 'Administrator',
      icon: Shield,
      color: 'red'
    },
    {
      role: 'participant',
      email: 'participant@citedeck.com',
      password: 'participant123',
      name: 'Participant/Author',
      icon: UserCircle,
      color: 'blue'
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple mock logic - admin emails contain 'admin', others are participants
    const role = email.includes('admin') ? 'admin' : 'participant';
    toast.success(`Welcome! Logged in as ${role}`);
    onLogin(role);
  };

  const quickLogin = (account) => {
    setEmail(account.email);
    setPassword(account.password);
    toast.success(`Demo credentials loaded for ${account.name}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-4">
      <div className="w-full max-w-5xl">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Side - Branding & Demo Accounts */}
          <div className="flex flex-col justify-center">
            {/* Logo and Branding */}
            <div className="text-center lg:text-left mb-8">
              <div className="flex items-center justify-center lg:justify-start mb-4">
                <div className="bg-primary rounded-xl p-3">
                  <GraduationCap className="h-10 w-10 text-primary-foreground" />
                </div>
              </div>
              <h1 className="text-4xl font-bold text-primary mb-2">CITEDECK</h1>
              <p className="text-lg text-muted-foreground mb-6">Academic Conference Management Platform</p>
              <p className="text-slate-600">
                Streamline conference organization, paper submissions, peer reviews, and attendee management all in one powerful platform.
              </p>
            </div>

            {/* Demo Account Cards */}
            <div className="space-y-4">
              <h3 className="font-semibold text-slate-900 mb-3">Quick Demo Access</h3>
              {demoAccounts.map((account, index) => {
                const Icon = account.icon;
                return (
                  <Card 
                    key={index} 
                    className={`border-2 hover:border-${account.color}-300 transition-all cursor-pointer hover:shadow-md`}
                    onClick={() => quickLogin(account)}
                  >
                    <CardContent className="pt-4">
                      <div className="flex items-center gap-3">
                        <div className={`h-12 w-12 rounded-lg bg-${account.color}-100 flex items-center justify-center flex-shrink-0`}>
                          <Icon className={`h-6 w-6 text-${account.color}-600`} />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-slate-900">{account.name}</h4>
                          <p className="text-sm text-slate-600">{account.email}</p>
                          <p className="text-xs text-slate-500 mt-1">Password: {account.password}</p>
                        </div>
                        <Button size="sm" variant="outline">
                          Quick Login
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Right Side - Login Form */}
          <div>
            <Card className="shadow-lg border-0">
              <CardHeader className="space-y-1">
                <CardTitle className="text-2xl text-center">Welcome Back</CardTitle>
                <CardDescription className="text-center">
                  Sign in to your CITEDECK account
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="bg-input-background"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <div className="relative">
                      <Input
                        id="password"
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="bg-input-background pr-10"
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <EyeOff className="h-4 w-4 text-muted-foreground" />
                        ) : (
                          <Eye className="h-4 w-4 text-muted-foreground" />
                        )}
                      </Button>
                    </div>
                  </div>

                  <Button type="submit" className="w-full">
                    Sign In
                  </Button>
                </form>

                <div className="mt-6 space-y-3">
                  <div className="text-center">
                    <Button variant="link" className="text-sm text-muted-foreground p-0">
                      Forgot Password?
                    </Button>
                  </div>
                  
                  <div className="text-center">
                    <span className="text-sm text-muted-foreground">Don't have an account? </span>
                    <Button variant="link" className="text-sm p-0">
                      Create an Account
                    </Button>
                  </div>
                </div>

                {/* Demo Info Box */}
                <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-200">
                  <p className="text-sm text-slate-700 mb-2 font-semibold">Demo Platform</p>
                  <p className="text-xs text-slate-600">
                    This is a demonstration platform. Click on any demo account card on the left or manually enter the credentials to explore the system.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
