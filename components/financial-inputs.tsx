"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { SystemConfig } from "@/lib/calculations"

interface FinancialInputsProps {
  config: SystemConfig
  onChange: (config: SystemConfig) => void
}

export function FinancialInputs({ config, onChange }: FinancialInputsProps) {
  const updateConfig = (field: keyof SystemConfig, value: number) => {
    onChange({ ...config, [field]: value })
  }

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {/* 电价参数 */}
      <Card className="border-2 border-secondary">
        <CardHeader className="bg-secondary text-secondary-foreground">
          <CardTitle className="flex items-center gap-2">
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            电价参数
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="electricityBuyPrice">电网购电价 (CNY/kWh)</Label>
              <Input
                id="electricityBuyPrice"
                type="number"
                step="0.01"
                value={config.electricityBuyPrice}
                onChange={(e) => updateConfig("electricityBuyPrice", Number(e.target.value))}
                className="border-secondary"
              />
              <p className="text-xs text-muted-foreground">商业电价约 1.0-1.5 CNY</p>
            </div>
            <div className="space-y-2">
              <Label htmlFor="electricitySellPrice">上网售电价 (CNY/kWh)</Label>
              <Input
                id="electricitySellPrice"
                type="number"
                step="0.01"
                value={config.electricitySellPrice}
                onChange={(e) => updateConfig("electricitySellPrice", Number(e.target.value))}
                className="border-secondary"
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="gridReliability">电网可靠性 (%)</Label>
            <Input
              id="gridReliability"
              type="number"
              value={config.gridReliability}
              onChange={(e) => updateConfig("gridReliability", Number(e.target.value))}
              className="border-secondary"
            />
            <p className="text-xs text-muted-foreground">南非电网可靠性约 70%，影响储能价值</p>
          </div>
        </CardContent>
      </Card>

      {/* 税务参数 */}
      <Card className="border-2 border-secondary">
        <CardHeader className="bg-secondary text-secondary-foreground">
          <CardTitle className="flex items-center gap-2">
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
            税务参数
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="corporateTaxRate">企业所得税率 (%)</Label>
              <Input
                id="corporateTaxRate"
                type="number"
                step="0.1"
                value={config.corporateTaxRate}
                onChange={(e) => updateConfig("corporateTaxRate", Number(e.target.value))}
                className="border-secondary"
              />
              <p className="text-xs text-muted-foreground">企业税率 25%</p>
            </div>
            <div className="space-y-2">
              <Label htmlFor="vatRate">增值税率 VAT (%)</Label>
              <Input
                id="vatRate"
                type="number"
                step="0.1"
                value={config.vatRate}
                onChange={(e) => updateConfig("vatRate", Number(e.target.value))}
                className="border-secondary"
              />
              <p className="text-xs text-muted-foreground">增值税 13%</p>
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="depreciationYears">折旧年限 (年)</Label>
            <Input
              id="depreciationYears"
              type="number"
              value={config.depreciationYears}
              onChange={(e) => updateConfig("depreciationYears", Number(e.target.value))}
              className="border-secondary"
            />
            <p className="text-xs text-muted-foreground">可再生能源可享受加速折旧优惠</p>
          </div>
        </CardContent>
      </Card>

      {/* 投资参数 */}
      <Card className="border-2 border-secondary">
        <CardHeader className="bg-secondary text-secondary-foreground">
          <CardTitle className="flex items-center gap-2">
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
            投资参数
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="discountRate">贴现率 (%)</Label>
              <Input
                id="discountRate"
                type="number"
                step="0.1"
                value={config.discountRate}
                onChange={(e) => updateConfig("discountRate", Number(e.target.value))}
                className="border-secondary"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="projectLifeYears">项目周期 (年)</Label>
              <Input
                id="projectLifeYears"
                type="number"
                value={config.projectLifeYears}
                onChange={(e) => updateConfig("projectLifeYears", Number(e.target.value))}
                className="border-secondary"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 运营参数 */}
      <Card className="border-2 border-secondary">
        <CardHeader className="bg-secondary text-secondary-foreground">
          <CardTitle className="flex items-center gap-2">
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            运营参数
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="annualDegradation">年衰减率 (%)</Label>
              <Input
                id="annualDegradation"
                type="number"
                step="0.1"
                value={config.annualDegradation}
                onChange={(e) => updateConfig("annualDegradation", Number(e.target.value))}
                className="border-secondary"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="maintenanceCostRate">年运维成本率 (%)</Label>
              <Input
                id="maintenanceCostRate"
                type="number"
                step="0.1"
                value={config.maintenanceCostRate}
                onChange={(e) => updateConfig("maintenanceCostRate", Number(e.target.value))}
                className="border-secondary"
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="insuranceRate">保险费率 (%)</Label>
            <Input
              id="insuranceRate"
              type="number"
              step="0.1"
              value={config.insuranceRate}
              onChange={(e) => updateConfig("insuranceRate", Number(e.target.value))}
              className="border-secondary"
            />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
