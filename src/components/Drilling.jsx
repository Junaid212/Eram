import { ArrowLeft } from "lucide-react";



export function Drilling({ onBack }) {
  const drillingRigProducts = [
    {
      title: "AC Variable-Frequency Electric Drive Drilling Rig",
      specs: [
        { label: "Core Components", value: "Pressure vessel, Engine" },
        { label: "After-sales Service Provided", value: "Engineers available to service machinery overseas" },
        { label: "Working air pressure", value: "1.05-4.5MPa" },
        { label: "Key Selling Points", value: "Automatic" }
      ]
    },
    {
      title: "Drawworks for Drilling Rig",
      specs: [
        { label: "Size", value: "JC40~70" },
        { label: "Application", value: "Oil and gas well drilling" },
        { label: "Advantage", value: "High Performance" }
      ]
    },
    {
      title: "ZP series of rotary tables",
      specs: [
        { label: "Model", value: "ZP175 ZP205 ZP275 ZP375" },
        { label: "Use", value: "Oil well" },
        { label: "Type", value: "Drilling rig rotary table" }
      ]
    },
    {
      title: "DSF-70 Air-cooled Electromagnetic Eddy Current Brake",
      specs: [
        { label: "Standard", value: "Petroleum Ds Series Electromagnetic Eddy Current Brake SY/T5533-92" }
      ]
    },
    {
      title: "Drum Shaft Assembly",
      specs: [
        { label: "Housing Material", value: "Aluminum & iron casting" },
        { label: "Package", value: "Multilayer wooden box/pallet, with big plastic bag inside" }
      ]
    },
    {
      title: "Drill Pipe Power Tong",
      specs: [
        { label: "Type", value: "Hydraulic power tong" },
        { label: "Application", value: "Oilfield Drilling" },
        { label: "Certificate", value: "API SPEC 7K" },
        { label: "Processing Type", value: "Forging" }
      ]
    },
    {
      title: "YM-16 Hydraulic Cathead",
      specs: [
        { label: "Machine Type", value: "Drilling Equipment" },
        { label: "Material", value: "Carbon Steel" },
        { label: "Processing Type", value: "Forging" },
        { label: "Certification", value: "API" }
      ]
    },
    {
      title: "Roller Chain Sprocket Gear Wheel",
      specs: [
        { label: "Applicable Industries", value: "Manufacturing Plant, Machinery Repair Shops, Construction" },
        { label: "Quality", value: "High Precision" },
        { label: "Material", value: "Steel/alloy steel" }
      ]
    },
    {
      
      specs: [
        { label: "Type", value: "Linkage Unit for Drilling Rig" },
        {  value: "Compound transmission device" },
        {  value: "Oilfield Chain Wheels" },
        {  value: "Derrick Pulley for Drilling Rig" },
      ]
    },
    
  ];

  // Styles
  const styles = {
    container: {
      minHeight: "100vh",
      background: "linear-gradient(135deg, #f9fafb 0%, #f3f4f6 100%)"
    },
    mainContent: {
      maxWidth: "80rem",
      margin: "0 auto",
      padding: "4rem 1rem"
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "1fr",
      gap: "2rem"
    },
    card: {
      background: "white",
      borderRadius: "1rem",
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      overflow: "hidden",
      transition: "all 0.3s ease",
      transform: "translateY(0)"
    },
    cardBorder: {
      height: "0.5rem",
      background: "linear-gradient(90deg, #dc2626 0%, #b91c1c 100%)"
    },
    cardContent: {
      padding: "1.5rem"
    },
    cardTitle: {
      fontSize: "1.25rem",
      fontWeight: 700,
      color: "#1f2937",
      marginBottom: "1rem",
      borderLeft: "4px solid #dc2626",
      paddingLeft: "0.75rem"
    },
    specItem: {
      borderLeft: "2px solid #e5e7eb",
      paddingLeft: "0.75rem",
      marginBottom: "0.75rem"
    },
    specLabel: {
      fontSize: "0.75rem",
      fontWeight: 600,
      color: "#dc2626",
      textTransform: "uppercase",
      letterSpacing: "0.05em",
      marginBottom: "0.25rem"
    },
    specValue: {
      fontSize: "0.875rem",
      color: "#374151",
      lineHeight: "1.625"
    },
    noSpecs: {
      fontSize: "0.875rem",
      color: "#6b7280",
      fontStyle: "italic"
    },
    
  };

  // Media queries
  const mediaQueries = {
    sm: "(min-width: 640px)",
    md: "(min-width: 768px)",
    lg: "(min-width: 1024px)"
  };

  // Responsive styles
  const responsiveStyles = {
    headerContent: {
      ...styles.headerContent,
      padding: window.matchMedia(mediaQueries.sm).matches ? 
        window.matchMedia(mediaQueries.lg).matches ? "3rem 2rem" : "3rem 1.5rem" : 
        "3rem 1rem"
    },
    mainContent: {
      ...styles.mainContent,
      padding: window.matchMedia(mediaQueries.sm).matches ? 
        window.matchMedia(mediaQueries.lg).matches ? "4rem 2rem" : "4rem 1.5rem" : 
        "4rem 1rem"
    },
    grid: {
      ...styles.grid,
      gridTemplateColumns: window.matchMedia(mediaQueries.md).matches ? 
        window.matchMedia(mediaQueries.lg).matches ? "repeat(3, 1fr)" : "repeat(2, 1fr)" : 
        "1fr"
    },
    footerContent: {
      ...styles.footerContent,
      padding: window.matchMedia(mediaQueries.sm).matches ? 
        window.matchMedia(mediaQueries.lg).matches ? "2rem 2rem" : "2rem 1.5rem" : 
        "2rem 1rem"
    }
  };

  return (
    <div style={styles.container}>
      {/* <header style={styles.header}>
        <div style={responsiveStyles.headerContent}>
          <button
            onClick={onBack}
            style={styles.backButton}
            onMouseOver={(e) => e.currentTarget.style.color = "#ffffff"}
            onMouseOut={(e) => e.currentTarget.style.color = "#fee2e2"}
          >
            <ArrowLeft size={20} />
            <span>Back</span>
          </button>
          <h1 style={styles.mainTitle}>Drilling Rig and Spare Parts</h1>
          <p style={styles.subtitle}>Complete Solutions for Oil and Gas Drilling Operations</p>
        </div>
      </header> */}

      <main style={responsiveStyles.mainContent}>
        <div style={responsiveStyles.grid}>
          {drillingRigProducts.map((product, index) => (
            <div
              key={index}
              style={styles.card}
              onMouseOver={(e) => {
                e.currentTarget.style.boxShadow = "0 25px 50px -12px rgba(0, 0, 0, 0.25)";
                e.currentTarget.style.transform = "translateY(-0.25rem)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.boxShadow = "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <div style={styles.cardBorder}></div>
              <div style={styles.cardContent}>
                <h2 style={styles.cardTitle}>
                  {product.title}
                </h2>
                {product.specs.length > 0 ? (
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                    {product.specs.map((spec, idx) => (
                      <div key={idx} style={styles.specItem}>
                        <div style={styles.specLabel}>
                          {spec.label}
                        </div>
                        <div style={styles.specValue}>
                          {spec.value}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p style={styles.noSpecs}>Premium drilling rig component</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}