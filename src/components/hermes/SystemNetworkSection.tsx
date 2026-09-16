import React, { useState } from 'react';
import { HERMES_SYSTEM_NODES } from '../../data/hermesData';
import { Network, Sparkles, Info, ArrowRight } from 'lucide-react';

export const SystemNetworkSection: React.FC = () => {
  const [activeNode, setActiveNode] = useState<string>("craft");

  const currentNode = HERMES_SYSTEM_NODES.find(n => n.id === activeNode) || HERMES_SYSTEM_NODES[0];

  // System flow connections: node -> next node in cycle
  const nextNodeMap: Record<string, string> = {
    artisan: "material",
    material: "craft",
    craft: "product",
    product: "store",
    store: "consumer",
    consumer: "culture",
    culture: "desirability",
    desirability: "demand",
    demand: "house",
    house: "artisan"
  };

  return (
    <div id="hermes-system-network-section" className="space-y-8">
      <div className="border-b border-[#D8CEBE] pb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <span className="text-xs uppercase tracking-[0.25em] text-[#F37021] font-semibold flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Section 18 • Relational Synthesis</span>
          </span>
          <h2 className="font-editorial text-3xl sm:text-5xl text-[#4A2415]">
            The Hermès System
          </h2>
          <p className="text-xs uppercase tracking-widest text-[#4A2415]/60 mt-1">
            Dynamic Node Architecture • Interactive Network
          </p>
        </div>

        <div className="flex items-center gap-2 bg-[#EDE5D9] px-4 py-2 rounded-full border border-[#D8CEBE] text-xs text-[#4A2415]">
          <Info className="w-4 h-4 text-[#F37021]" />
          <span className="font-semibold text-[#F37021]">Project Interpretation:</span>
          <span>Analytical model, not an official Hermès framework</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#EDE5D9] rounded-3xl p-6 sm:p-10 border border-[#D8CEBE] shadow-md">
        {/* Left: Node Network Layout */}
        <div className="lg:col-span-7 space-y-4">
          <div className="text-xs uppercase font-bold tracking-wider text-[#4A2415]/70 flex items-center gap-2">
            <Network className="w-4 h-4 text-[#F37021]" />
            <span>Interactive Node Ring (Tap a node to explore feedback loops):</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
            {HERMES_SYSTEM_NODES.map((node) => {
              const isSelected = activeNode === node.id;
              return (
                <button
                  key={node.id}
                  onClick={() => setActiveNode(node.id)}
                  className={`p-3 rounded-xl text-center transition-all border flex flex-col items-center justify-center min-h-[72px] ${
                    isSelected
                      ? 'bg-[#4A2415] text-[#F7F3ED] border-[#4A2415] shadow-md ring-2 ring-[#F37021]/30'
                      : 'bg-[#F7F3ED] hover:bg-white text-[#4A2415] border-[#D8CEBE]'
                  }`}
                >
                  <span className={`text-[9px] uppercase tracking-wider font-mono mb-1 ${isSelected ? 'text-[#F37021]' : 'text-[#4A2415]/50'}`}>
                    Node
                  </span>
                  <span className="text-xs font-bold truncate w-full">
                    {node.label}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="text-[11px] text-[#4A2415]/60 text-center italic pt-2">
            *Every node feeds into the subsequent node, creating a self-reinforcing engine of desirability.
          </div>
        </div>

        {/* Right: Detailed Node Synthesis */}
        <div className="lg:col-span-5 bg-[#F7F3ED] rounded-2xl p-6 sm:p-8 border border-[#D8CEBE] space-y-5">
          <div className="flex items-center justify-between border-b border-[#D8CEBE] pb-3">
            <span className="text-xs uppercase tracking-widest font-semibold text-[#F37021]">
              Active System Component
            </span>
            <span className="text-xs font-mono text-[#4A2415]/60 uppercase">
              Loop Node
            </span>
          </div>

          <div className="space-y-2">
            <h3 className="font-editorial text-3xl text-[#4A2415]">
              {currentNode.label}
            </h3>
            <p className="text-sm text-[#4A2415]/85 leading-relaxed bg-[#EDE5D9]/50 p-4 rounded-xl border border-[#D8CEBE]/50">
              {currentNode.role}
            </p>
          </div>

          <div className="pt-2 flex items-center justify-between">
            <div className="text-xs text-[#4A2415]/70">
              Flows into: <strong className="text-[#4A2415]">{HERMES_SYSTEM_NODES.find(n => n.id === nextNodeMap[activeNode])?.label}</strong>
            </div>
            <button
              onClick={() => setActiveNode(nextNodeMap[activeNode])}
              className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#F37021] hover:underline"
            >
              <span>Follow Cycle</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
