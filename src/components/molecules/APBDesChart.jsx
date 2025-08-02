import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const data = {
  labels: [
    "Dana Desa",
    "Alokasi Dana Desa",
    "Pendapatan Asli Desa",
    "Lain-lain Pendapatan",
    "Belanja Pegawai",
    "Belanja Barang & Jasa",
    "Belanja Modal",
    "Pembiayaan Masuk",
    "Pembiayaan Keluar",
  ],
  datasets: [
    {
      label: "APBDes 2025 (Rp)",
      data: [
        700000000, // Dana Desa
        350000000, // Alokasi Dana Desa
        100000000, // Pendapatan Asli Desa
        100000000, // Lain-lain Pendapatan
        250000000, // Belanja Pegawai
        600000000, // Belanja Barang & Jasa
        300000000, // Belanja Modal
        120000000, // Pembiayaan Masuk
        20000000, // Pembiayaan Keluar
      ],
      backgroundColor: [
        "#3b82f6", // Dana Desa
        "#60a5fa", // Alokasi Dana Desa
        "#2563eb", // Pendapatan Asli Desa
        "#1e40af", // Lain-lain Pendapatan
        "#22c55e", // Belanja Pegawai
        "#4ade80", // Belanja Barang & Jasa
        "#16a34a", // Belanja Modal
        "#eab308", // Pembiayaan Masuk
        "#facc15", // Pembiayaan Keluar
      ],
      borderRadius: 8,
      barPercentage: 0.6,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: true,
      text: "Detail Anggaran Desa (APBDes) 2025",
      font: {
        size: 18,
      },
    },
    tooltip: {
      callbacks: {
        label: function (context) {
          return (
            context.label + ": Rp " + context.parsed.y.toLocaleString("id-ID")
          );
        },
      },
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      ticks: {
        callback: function (value) {
          return "Rp " + value.toLocaleString("id-ID");
        },
      },
    },
  },
};

const APBDesChart = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center py-8">
      <div className="w-full max-w-2xl bg-white rounded-xl shadow p-4">
        <Bar data={data} options={options} />
        <div className="mt-6 text-sm text-gray-700">
          <div className="font-semibold mb-2">Rincian Data:</div>
          <ul className="list-disc ml-6 space-y-1">
            <li>
              <span className="font-medium">Pendapatan:</span> Dana Desa Rp
              700.000.000, Alokasi Dana Desa Rp 350.000.000, Pendapatan Asli
              Desa Rp 100.000.000, Lain-lain Pendapatan Rp 100.000.000
            </li>
            <li>
              <span className="font-medium">Belanja:</span> Belanja Pegawai Rp
              250.000.000, Belanja Barang & Jasa Rp 600.000.000, Belanja Modal
              Rp 300.000.000
            </li>
            <li>
              <span className="font-medium">Pembiayaan:</span> Pembiayaan Masuk
              Rp 120.000.000, Pembiayaan Keluar Rp 20.000.000
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default APBDesChart;
