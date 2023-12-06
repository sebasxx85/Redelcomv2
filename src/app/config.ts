import { InjectionToken } from "@angular/core"
import { ContenidoPOSService } from "./services/contenido-pos.service"
import { TerminalesService } from "./services/terminales.service"

export interface configuration {
    
    servicios: {
        contenidoPOS: ContenidoPOSService,
        terminales: TerminalesService
    }
}

export const config: configuration = {
    servicios: {
        contenidoPOS: new ContenidoPOSService(),
        terminales: new TerminalesService()
    }
}

export const token = new InjectionToken<configuration>('config')