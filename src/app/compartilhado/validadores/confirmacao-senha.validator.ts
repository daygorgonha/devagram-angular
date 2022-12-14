import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function confirmacaoSenha(): ValidatorFn {
  return (campoForm: AbstractControl): ValidationErrors | null => {
    const form = campoForm.parent;
    const senha = campoForm?.get('senha')?.value;
    const confirmacaoSenha = campoForm?.get('confirmacaoSenha')?.value;

    return senha === confirmacaoSenha ? null : { confirmacaoSenha: true}
  }
}
