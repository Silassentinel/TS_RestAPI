/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable func-names */
/* eslint-disable no-unused-vars */
String.StartsWith = function (this: string, str: any): boolean {
  return this.substring(0, str.length) === str;
};

String.EndsWith = function (this: string, val: any): boolean {
  return this.substring(this.length - val.length) === val;
};

String.TruncateWords = function (this: string, val: any): string {
  return this.split(' ').slice(0, val).join(' ');
};

String.CapFirst = function (this: string): string {
  return this.charAt(0).toUpperCase() + this.slice(1);
};

String.Contains = function (this: string, val: any): boolean {
  return this.indexOf(val) !== -1;
};

String.IsNullOrEmpty = function (this:string, val: any): boolean {
  if (val === undefined || val === null || val.trim() === '') {
    return true;
  }
  return false;
};

String.Contains = function (this: string, val: any): boolean {
  if (this.indexOf(val) >= 0) {
    return true;
  }
  return false;
};
