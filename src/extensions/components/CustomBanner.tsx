// src/extensions/components/CustomBanner.tsx
// This is a simple custom component to demonstrate UITarget injection.
// ⚠️ [VERIFY] Update the targetId used below to match an actual available slot in v0.3.0

export function CustomBanner() {
 return (
   <div className="bg-blue-50 border border-blue-200 rounded-lg px-4 py-3 text-sm text-blue-800 my-2">
     🎉 This banner was injected via the SFN Extension Model!
   </div>
 )
}