import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Eye, EyeOff, Zap, Shield, Users } from "lucide-react";

const features = [
    { icon: Zap, text: "Instant provisioning of CAD-ready instances" },
    { icon: Shield, text: "Enterprise-grade encryption for all projects" },
    { icon: Users, text: "Real-time collaboration for student teams" },
];

const Login = () => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        remember: false,
    });
    const [error, setError] = useState("");

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.email || !formData.password) {
            setError("Please fill in all fields.");
            return;
        }
        navigate("/dashboard");
    };

    return (
        <div className="min-h-screen flex bg-[#0B0F19] text-white">

            {/* LEFT PANEL */}
            <div className="hidden lg:flex flex-col w-1/2 p-16 bg-[#0B0F19]">

                {/* Logo */}
                <div className="flex items-center gap-2 mb-16">
                    <span className="text-white text-xl font-bold tracking-widest">ENSAM</span>
                    <span className="text-blue-400 text-xl font-bold tracking-widest">CLOUD</span>
                </div>

                {/* Hero text */}
                <div className="flex-1 flex flex-col justify-center">
                    <span className="text-blue-400 text-xs tracking-widest uppercase mb-4 block">
                        ENGINEERING WORKSPACE
                    </span>
                    <h1 className="text-5xl font-extrabold leading-tight mb-6">
                        Your cloud workstation, ready when you are
                    </h1>
                    <p className="text-gray-400 text-base leading-relaxed mb-12">
                        Access high-performance computing resources and collaborative
                        engineering tools from any device, anywhere in the world.
                    </p>

                    {/* Features */}
                    <ul className="flex flex-col gap-4">
                        {features.map((feature, index) => {
                            const Icon = feature.icon;
                            return (
                                <li key={index} className="flex items-center gap-3 text-gray-400 text-sm">
                                    <div className="w-8 h-8 rounded-lg bg-blue-600/20 flex items-center justify-center flex-shrink-0">
                                        <Icon size={16} className="text-blue-400" />
                                    </div>
                                    {feature.text}
                                </li>
                            );
                        })}
                    </ul>
                </div>

                {/* Copyright */}
                <p className="text-gray-600 text-xs tracking-widest">
                    © 2024 ENSAM CLOUD · STUDENT EDITION
                </p>
            </div>

            {/* RIGHT PANEL */}
            <div className="flex-1 lg:w-1/2 flex flex-col justify-center px-6 sm:px-12 lg:px-16 bg-[#0D1526]">

                {/* Mobile logo */}
                <div className="flex items-center gap-2 mb-10 lg:hidden">
                    <span className="text-white text-xl font-bold tracking-widest">ENSAM</span>
                    <span className="text-blue-400 text-xl font-bold tracking-widest">CLOUD</span>
                </div>

                <span className="text-blue-400 text-xs tracking-widest uppercase mb-4 block">
                    ACCESS PORTAL
                </span>
                <h2 className="text-3xl font-bold mb-2">Welcome back</h2>
                <p className="text-gray-400 mb-8 text-sm">
                    Please enter your credentials to access your workspace.
                </p>

                {/* Error */}
                {error && (
                    <div className="mb-4 px-4 py-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-sm">
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">

                    {/* Email */}
                    <div className="flex flex-col gap-1.5">
                        <label className="text-gray-400 text-sm">Email Address</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="student@ensam-cloud.com"
                            className="w-full px-4 py-3 bg-[#111827] border border-white/10 rounded-xl text-white text-sm placeholder-gray-600 focus:outline-none focus:border-blue-500 transition-colors"
                        />
                    </div>

                    {/* Password */}
                    <div className="flex flex-col gap-1.5">
                        <div className="flex justify-between items-center">
                            <label className="text-gray-400 text-sm">Password</label>
                            <button type="button" className="text-blue-400 text-xs hover:underline">
                                Forgot password?
                            </button>
                        </div>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                className="w-full px-4 py-3 pr-12 bg-[#111827] border border-white/10 rounded-xl text-white text-sm placeholder-gray-600 focus:outline-none focus:border-blue-500 transition-colors"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white transition-colors"
                            >
                                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                            </button>
                        </div>
                    </div>

                    {/* Remember me */}
                    <div className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            name="remember"
                            id="remember"
                            checked={formData.remember}
                            onChange={handleChange}
                            className="w-4 h-4 accent-blue-500"
                        />
                        <label htmlFor="remember" className="text-gray-400 text-sm">
                            Keep me signed in for 30 days
                        </label>
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-semibold text-sm transition-colors flex items-center justify-center gap-2"
                    >
                        Sign in to Dashboard
                    </button>

                    {/* Divider */}
                    <div className="flex items-center gap-4 text-gray-600 text-xs tracking-widest">
                        <div className="flex-1 h-px bg-white/10" />
                        <span>OR CONTINUE WITH</span>
                        <div className="flex-1 h-px bg-white/10" />
                    </div>

                    {/* SSO */}
                    <button
                        type="button"
                        className="w-full py-3 bg-transparent border border-white/10 hover:border-blue-500 text-white rounded-xl font-medium text-sm flex items-center justify-center gap-2 transition-colors"
                    >
                        <i className="fa-brands fa-google text-base" />
                        Continue with ENSAM SSO
                    </button>

                </form>

                {/* Register link */}
                <p className="text-gray-400 text-sm text-center mt-6">
                    New to the platform?{" "}
                    <Link to="/register" className="text-blue-400 font-semibold hover:underline">
                        Create an account
                    </Link>
                </p>

            </div>
        </div>
    );
};

export default Login;