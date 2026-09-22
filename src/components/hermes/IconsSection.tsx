import React, { useState } from 'react';
import { PRODUCT_ICONS } from '../../data/hermesData';
import { ProductIconItem } from '../../types';
import { Eye, Shield, Sparkles } from 'lucide-react';

export const IconsSection: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<ProductIconItem>(PRODUCT_ICONS[0]);

  return (
    <div className="space-y-10">
      <div className="border-b border-[#D8CEBE] pb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <span className="text-xs uppercase tracking-[0.25em] text-[#F37021] font-semibold flex items-center gap-2 mb-3.5 sm:mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Section 09</span>
          </span>
          <h2 className="font-editorial text-3xl sm:text-5xl text-[#4A2415] font-normal leading-tight">
            When Objects Become Symbols
          </h2>
          <p className="text-xs uppercase tracking-widest text-[#4A2415]/60 mt-1">
            The Icons of Hermès • Non-Commercial Curatorial Review
          </p>
        </div>
        <div className="text-xs text-[#4A2415]/75 italic max-w-xs font-light">
          Objects created out of genuine functional demand rather than focus groups or marketing trends.
        </div>
      </div>

      {/* Hero Showcase of the Selected Product */}
      <div className="bg-[#EDE5D9] rounded-3xl p-6 sm:p-10 border border-[#D8CEBE] shadow-lg">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: Big Image */}
          <div className="lg:col-span-6 aspect-[4/3] rounded-2xl overflow-hidden shadow-xl bg-white border border-[#D8CEBE]">
            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              className="w-full h-full object-cover transition-all duration-700 hover:scale-105"
            />
          </div>

          {/* Right: Curatorial Story (No Ecommerce CTAs) */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#F37021]">
                {selectedProduct.category} • Circa {selectedProduct.year}
              </span>
              <span className="text-[11px] px-3 py-1 rounded-full bg-[#4A2415]/10 text-[#4A2415] font-semibold tracking-wider uppercase">
                Archival Object
              </span>
            </div>

            <h3 className="font-editorial text-3xl sm:text-4xl text-[#4A2415] leading-tight">
              {selectedProduct.name}
            </h3>

            <p className="font-editorial italic text-lg sm:text-xl text-[#F37021] leading-snug">
              “{selectedProduct.tagline}”
            </p>

            <p className="text-sm text-[#4A2415]/85 leading-relaxed font-light">
              {selectedProduct.story}
            </p>

            {/* Artisan Craft Detail Box */}
            <div className="p-4 rounded-xl bg-[#F7F3ED] border border-[#D8CEBE] space-y-1">
              <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#4A2415]">
                <Shield className="w-3.5 h-3.5 text-[#F37021]" />
                <span>Artisanal Construction Detail:</span>
              </div>
              <p className="text-xs text-[#4A2415]/85 leading-relaxed font-light">
                {selectedProduct.detail}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Horizontal Carousel / Scrubber of All Icons */}
      <div className="space-y-3">
        <div className="text-xs uppercase tracking-wider font-semibold text-[#4A2415]/70 flex items-center gap-2">
          <Eye className="w-3.5 h-3.5 text-[#F37021]" />
          <span>Select an Icon to Inspect Story ({PRODUCT_ICONS.length}):</span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
          {PRODUCT_ICONS.map((item) => {
            const isSelected = selectedProduct.id === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setSelectedProduct(item)}
                className={`p-2.5 rounded-xl text-left transition-all border flex flex-col justify-between h-32 ${
                  isSelected
                    ? 'bg-[#4A2415] text-[#F7F3ED] border-[#4A2415] shadow-md ring-2 ring-[#F37021]/30'
                    : 'bg-[#EDE5D9]/60 hover:bg-[#EDE5D9] text-[#4A2415] border-[#D8CEBE]'
                }`}
              >
                <div className="w-full h-14 rounded-lg overflow-hidden mb-2 bg-white">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div>
                  <div className="text-[10px] opacity-75 truncate font-medium">
                    {item.year}
                  </div>
                  <div className="text-xs font-bold truncate">
                    {item.name}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
