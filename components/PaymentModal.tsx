"use client"

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Copy, CheckCircle2, Wallet, Building2, ArrowRight } from "lucide-react";
import { toast } from "sonner";

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type PaymentMethod = "bank" | "crypto";

const PaymentModal = ({ isOpen, onClose }: PaymentModalProps) => {
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("bank");
  const [copied, setCopied] = useState<string | null>(null);

  const bankDetails = {
    accountNumber: "6173012241",
    bankName: "Fidelity Bank PLC",
    accountName: "Ayadinuno okechukwu Obiora",
    amountNaira: "₦29,000",
    amountUSD: "$20",
  };

  const cryptoDetails = {
    wallet: "ТЕНZЗDaZWR8YoMQzioa4M4hbqAqurPMbES",
    network: "USDT (TRC20)",
    amountUSD: "$20",
  };

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopied(label);
    toast.success(`${label} copied to clipboard!`);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="glass-card w-full max-w-md p-6 sm:p-8 relative overflow-hidden">
              {/* Decorative glow */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/20 rounded-full blur-3xl" />
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />

              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Header */}
              <div className="text-center mb-6 relative z-10">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring" }}
                  className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center"
                >
                  <span className="text-3xl">🎟️</span>
                </motion.div>
                <h2 className="text-2xl font-bold text-foreground mb-1">
                  Unlock Location
                </h2>
                <p className="text-muted-foreground text-sm">
                  Complete payment to get exclusive access
                </p>
              </div>

              {/* Payment Method Tabs */}
              <div className="flex gap-2 mb-6 relative z-10">
                <button
                  onClick={() => setPaymentMethod("bank")}
                  className={`flex-1 py-3 px-4 rounded-xl font-semibold text-sm uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-300 ${paymentMethod === "bank"
                    ? "bg-primary text-primary-foreground glow-gold"
                    : "bg-secondary text-muted-foreground hover:text-foreground"
                    }`}
                >
                  <Building2 className="w-4 h-4" />
                  Bank Transfer
                </button>
                <button
                  onClick={() => setPaymentMethod("crypto")}
                  className={`flex-1 py-3 px-4 rounded-xl font-semibold text-sm uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-300 ${paymentMethod === "crypto"
                    ? "bg-primary text-primary-foreground glow-gold"
                    : "bg-secondary text-muted-foreground hover:text-foreground"
                    }`}
                >
                  <Wallet className="w-4 h-4" />
                  Crypto
                </button>
              </div>

              {/* Payment Details */}
              <div className="space-y-4 relative z-10">
                <AnimatePresence mode="wait">
                  {paymentMethod === "bank" ? (
                    <motion.div
                      key="bank"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      className="space-y-3"
                    >
                      {/* Amount */}
                      <div className="bg-secondary rounded-xl p-4 text-center">
                        <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                          Amount to Pay
                        </p>
                        <p className="text-3xl font-black text-primary">
                          {bankDetails.amountNaira}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          ({bankDetails.amountUSD} USD)
                        </p>
                      </div>

                      {/* Bank Details */}
                      <div className="bg-secondary rounded-xl p-4 space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-muted-foreground">Bank</span>
                          <span className="font-semibold text-foreground">{bankDetails.bankName}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-muted-foreground">Account Number</span>
                          <div className="flex items-center gap-2">
                            <span className="font-mono font-semibold text-foreground">
                              {bankDetails.accountNumber}
                            </span>
                            <button
                              onClick={() => copyToClipboard(bankDetails.accountNumber, "Account number")}
                              className="p-1.5 rounded-lg bg-muted hover:bg-primary/20 transition-colors"
                            >
                              {copied === "Account number" ? (
                                <CheckCircle2 className="w-4 h-4 text-green-500" />
                              ) : (
                                <Copy className="w-4 h-4 text-primary" />
                              )}
                            </button>
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-muted-foreground">Account Name</span>
                          <span className="font-semibold text-foreground">{bankDetails.accountName}</span>
                        </div>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="crypto"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      className="space-y-3"
                    >
                      {/* Amount */}
                      <div className="bg-secondary rounded-xl p-4 text-center">
                        <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                          Amount to Pay
                        </p>
                        <p className="text-3xl font-black text-primary">
                          {cryptoDetails.amountUSD}
                        </p>
                        <p className="text-xs text-muted-foreground">in USDT/TRON</p>
                      </div>

                      {/* Crypto Details */}
                      <div className="bg-secondary rounded-xl p-4 space-y-3">
                        <div>
                          <span className="text-sm text-muted-foreground block mb-1">Network</span>
                          <span className="font-semibold text-foreground text-sm">
                            {cryptoDetails.network}
                          </span>
                        </div>
                        <div>
                          <span className="text-sm text-muted-foreground block mb-1">Wallet Address</span>
                          <div className="flex items-center gap-2">
                            <span className="font-mono text-xs text-foreground break-all">
                              {cryptoDetails.wallet}
                            </span>
                            <button
                              onClick={() => copyToClipboard(cryptoDetails.wallet, "Wallet address")}
                              className="p-1.5 rounded-lg bg-muted hover:bg-primary/20 transition-colors shrink-0"
                            >
                              {copied === "Wallet address" ? (
                                <CheckCircle2 className="w-4 h-4 text-green-500" />
                              ) : (
                                <Copy className="w-4 h-4 text-primary" />
                              )}
                            </button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Instructions */}
                <div className="bg-primary/10 border border-primary/30 rounded-xl p-4">
                  <h3 className="font-bold text-primary text-sm mb-2 flex items-center gap-2">
                    <ArrowRight className="w-4 h-4" />
                    After Payment
                  </h3>
                  <ol className="text-xs text-muted-foreground space-y-1 list-decimal list-inside">
                    <li>Take a screenshot of your payment confirmation</li>
                    <li>
                      Send the screenshot to{" "}
                      <a
                        href="https://www.instagram.com/kayfiire02"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline font-semibold"
                      >
                        @kayfiire02
                      </a>{" "}
                      on Instagram
                    </li>
                    <li>Or call/WhatsApp: <span className="text-foreground font-semibold">08085554134</span></li>
                    <li>Receive your exclusive location details within 24hrs</li>
                  </ol>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default PaymentModal;
