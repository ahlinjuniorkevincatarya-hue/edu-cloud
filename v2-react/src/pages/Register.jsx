import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Eye, EyeOff, Terminal } from "lucide-react";

const Register = () => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);
    const [error, setError] = useState("");
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        codeApogee: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (Object.values(formData).some((v) => v === "")) {
            setError("Please fill in all fields.");
            return;
        }
        if (formData.password !== formData.confirmPassword) {
            setError("Passwords do not match.");
            return;
        }
        if (formData.password.length < 8) {
            setError("Password must be at least 8 characters.");
            return;
        }
        navigate("/dashboard");
    };

    const inputClass = "w-full px-4 py-2.5 bg-[#111827] border border-white/10 rounded-xl text-white text-sm placeholder-gray-600 focus:outline-none focus:border-blue-500 transition-colors";

    return (
        <div className="min-h-screen flex bg-[#0B0F19] text-white overflow-hidden">

            {/* LEFT PANEL — Formulaire */}
            <div className="flex-1 lg:w-1/2 flex flex-col justify-center px-6 sm:px-12 lg:px-16 py-6 bg-[#0D1526] overflow-y-auto">

                {/* Logo mobile */}
                <div className="flex items-center gap-2 mb-8 lg:hidden">
                    <span className="text-white text-xl font-bold tracking-widest">ENSAM</span>
                    <span className="text-blue-400 text-xl font-bold tracking-widest">CLOUD</span>
                </div>

                <h2 className="text-2xl font-bold mb-1">Create Account</h2>
                <p className="text-gray-400 text-sm mb-4">Use your student credentials</p>

                {/* Error */}
                {error && (
                    <div className="mb-4 px-4 py-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-sm">
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="flex flex-col gap-3">

                    {/* First + Last name */}
                    <div className="grid grid-cols-2 gap-4">
                        <div className="flex flex-col gap-1.5">
                            <label className="text-gray-400 text-sm">First Name</label>
                            <input
                                type="text"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                placeholder="Ahmed"
                                className={inputClass}
                            />
                        </div>
                        <div className="flex flex-col gap-1.5">
                            <label className="text-gray-400 text-sm">Last Name</label>
                            <input
                                type="text"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                placeholder="Karimi"
                                className={inputClass}
                            />
                        </div>
                    </div>

                    {/* Code Apogée */}
                    <div className="flex flex-col gap-1.5">
                        <label className="text-gray-400 text-sm">Code Apogée</label>
                        <input
                            type="number"
                            name="codeApogee"
                            value={formData.codeApogee}
                            onChange={handleChange}
                            placeholder="12345678"
                            className={inputClass}
                        />
                    </div>

                    {/* Email */}
                    <div className="flex flex-col gap-1.5">
                        <label className="text-gray-400 text-sm">Student E-mail</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="karimi.ahmed@ensam-casa.ma"
                            className={inputClass}
                        />
                    </div>

                    {/* Password */}
                    <div className="flex flex-col gap-1.5">
                        <label className="text-gray-400 text-sm">Password</label>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="Must be 8 characters"
                                className={inputClass + " pr-12"}
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

                    {/* Confirm Password */}
                    <div className="flex flex-col gap-1.5">
                        <label className="text-gray-400 text-sm">Repeat Password</label>
                        <div className="relative">
                            <input
                                type={showConfirm ? "text" : "password"}
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                placeholder="Must be 8 characters"
                                className={inputClass + " pr-12"}
                            />
                            <button
                                type="button"
                                onClick={() => setShowConfirm(!showConfirm)}
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white transition-colors"
                            >
                                {showConfirm ? <EyeOff size={18} /> : <Eye size={18} />}
                            </button>
                        </div>
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        className="w-full py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-semibold text-sm transition-colors"
                    >
                        Create Account →
                    </button>

                    {/* Divider */}
                    <div className="flex items-center gap-4 text-gray-600 text-xs tracking-widest">
                        <div className="flex-1 h-px bg-white/10" />
                        <span>OR REGISTER WITH</span>
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

                <p className="text-gray-400 text-sm text-center mt-4">
                    Already have an account?{" "}
                    <Link to="/" className="text-blue-400 font-semibold hover:underline">
                        Sign In
                    </Link>
                </p>

            </div>

            {/* RIGHT PANEL — Visuel */}
            <div className="hidden lg:flex flex-col justify-end w-1/2 p-16 bg-[#0B0F19] relative overflow-hidden">

                {/* Logo */}
                <div className="absolute top-16 left-16 flex items-center gap-2">
                    <span className="text-white text-xl font-bold tracking-widest">ENSAM</span>
                    <span className="text-blue-400 text-xl font-bold tracking-widest">CLOUD</span>
                </div>

                {/* Terminal icon */}
                <div className="mb-8">
                    <div className="w-20 h-20 bg-blue-600 rounded-2xl flex items-center justify-center">
                        <Terminal size={36} className="text-white" />
                    </div>
                </div>

                {/* Text */}
                <span className="text-blue-400 text-xs tracking-widest uppercase mb-4 block">
                    PRECISION FLUIDITY
                </span>
                <h2 className="text-4xl font-extrabold leading-tight mb-4">
                    Empowering the next generation of engineers.
                </h2>
                <p className="text-gray-400 text-base leading-relaxed mb-12 max-w-md">
                    A refined workspace that balances raw technicality with architectural clarity.
                </p>

                {/* Server stats */}
                <div className="flex gap-10 pt-8 border-t border-white/10">
                    <div className="flex flex-col gap-1">
                        <span className="text-gray-500 text-xs tracking-widest uppercase">Network Status</span>
                        <span className="text-white text-sm font-bold tracking-widest">OPTIMIZED</span>
                    </div>
                    <div className="flex flex-col gap-1">
                        <span className="text-gray-500 text-xs tracking-widest uppercase">Region</span>
                        <span className="text-white text-sm font-bold tracking-widest">CASABLANCA-01</span>
                    </div>
                    <div className="flex flex-col gap-1">
                        <span className="text-gray-500 text-xs tracking-widest uppercase">Student Tier</span>
                        <span className="text-white text-sm font-bold tracking-widest">V-2.0.4</span>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Register;