import {Ring} from "./Ring.model";
import {BaseAuditModel} from "./BaseAuditModel.model";
import {Status} from "./Status.enum";
import {MaritalStatus} from "./MaritalStatus.enum";

export interface Student extends BaseAuditModel {
  id?: number;
  fullName: string;
  nationalId?: string;
  birthDate?: string;
  status?: Status;
  address?: string;
  maritalStatus?: MaritalStatus;
  joiningDate?: string;
  fatherPhoneNumber?: string;
  fatherEmailAddress?: string;
  motherPhoneNumber?: string;
  motherName?: string;
  ringId?: number;
  ring?: Ring;
  periodName: string;
}
