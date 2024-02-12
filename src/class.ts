class HttpResponses<D, E> {
  protected success: boolean;
  protected data?: D;
  protected code?: E;

  constructor(success: boolean, data?: D, error?: E){
    this.success = success
    if(data){
      this.data = data
    }
    if(error){
      this.code = error
    }
  }
}
const respToken = new HttpResponses<number, string>(true, 876876876)
const respUser = new HttpResponses<string, string>(true, 'eg eg ej hg ej hge jj')