package br.com.hackforchange.bean;

public class Saneamento {

	private int idSaneamento;
	private int idAluno;
	private String quartaInteracao;
	private String quintaInteracao;
	private String sextaInteracao;
	
	public Saneamento() {
		
	}

	public Saneamento(int idSaneamento, int idAluno, String quartaInteracao, String quintaInteracao,
			String sextaInteracao) {
		this.idSaneamento = idSaneamento;
		this.idAluno = idAluno;
		this.quartaInteracao = quartaInteracao;
		this.quintaInteracao = quintaInteracao;
		this.sextaInteracao = sextaInteracao;
	}

	public int getIdSaneamento() {
		return idSaneamento;
	}

	public void setIdSaneamento(int idSaneamento) {
		this.idSaneamento = idSaneamento;
	}

	public int getIdAluno() {
		return idAluno;
	}

	public void setIdAluno(int idAluno) {
		this.idAluno = idAluno;
	}

	public String getQuartaInteracao() {
		return quartaInteracao;
	}

	public void setQuartaInteracao(String quartaInteracao) {
		this.quartaInteracao = quartaInteracao;
	}

	public String getQuintaInteracao() {
		return quintaInteracao;
	}

	public void setQuintaInteracao(String quintaInteracao) {
		this.quintaInteracao = quintaInteracao;
	}

	public String getSextaInteracao() {
		return sextaInteracao;
	}

	public void setSextaInteracao(String sextaInteracao) {
		this.sextaInteracao = sextaInteracao;
	}
	
}
